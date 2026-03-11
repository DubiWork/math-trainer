/**
 * LevelMap -- Horizontal scrollable level progress visualization
 *
 * Displays 13 level checkpoints in a horizontal row.
 * Each level shows its completion state:
 *   - Completed (< currentLevel): green star
 *   - Current (=== currentLevel): gold pulsing node
 *   - Locked (> currentLevel): grey/faded lock
 *
 * Read-only for MVP -- no click-to-select.
 * Auto-scrolls to show the current level on mount.
 *
 * @param {Object} props
 * @param {number} [props.currentLevel=1] The player's current level (1-13)
 */

import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import LEVELS from '../config/levels'

/**
 * Returns the status of a level relative to the current level.
 * @param {number} levelId
 * @param {number} currentLevel
 * @returns {'completed' | 'current' | 'locked'}
 */
function getLevelStatus(levelId, currentLevel) {
  if (levelId < currentLevel) return 'completed'
  if (levelId === currentLevel) return 'current'
  return 'locked'
}

/**
 * Single level node with icon, circle, and label.
 */
function LevelNode({ level, status, nodeRef }) {
  const { t } = useTranslation()
  const isCompleted = status === 'completed'
  const isCurrent = status === 'current'
  const isLocked = status === 'locked'

  const statusText = isCompleted
    ? t('levelmap.completed')
    : isCurrent
      ? t('levelmap.current')
      : t('levelmap.locked')

  return (
    <div
      role="listitem"
      aria-label={t('levelmap.levelStatus', { id: level.id, name: level.name, status: statusText })}
      data-testid={`level-node-${level.id}`}
      ref={nodeRef}
      className="flex flex-col items-center snap-center shrink-0 w-16 md:w-20"
    >
      {/* Circle with icon */}
      <div
        className={`
          flex items-center justify-center
          w-10 h-10 md:w-12 md:h-12 rounded-full
          border-2 transition-colors
          ${isCompleted ? 'border-green-500 bg-green-500/20' : ''}
          ${isCurrent ? 'border-yellow-500 bg-yellow-500/20' : ''}
          ${isLocked ? 'border-gray-500 bg-gray-500/10 opacity-50' : ''}
          ${isCurrent ? 'animate-pulse-gold motion-reduce:animate-none' : ''}
        `}
      >
        {isCompleted && (
          <span
            className="text-green-500 text-lg md:text-xl"
            data-testid="star-icon"
            aria-hidden="true"
          >
            &#x2B50;
          </span>
        )}
        {isCurrent && (
          <span
            className="text-yellow-500 text-lg md:text-xl font-game font-bold"
            aria-hidden="true"
          >
            {level.id}
          </span>
        )}
        {isLocked && (
          <span
            className="text-gray-400 text-lg md:text-xl"
            data-testid="lock-icon"
            aria-hidden="true"
          >
            &#x1F512;
          </span>
        )}
      </div>

      {/* Level name */}
      <span
        className={`
          text-xs md:text-sm font-game text-center mt-1 leading-tight
          ${isCompleted ? 'text-green-400' : ''}
          ${isCurrent ? 'text-yellow-400 font-bold' : ''}
          ${isLocked ? 'text-gray-500' : ''}
        `}
      >
        {level.name}
      </span>
    </div>
  )
}

LevelNode.propTypes = {
  level: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  status: PropTypes.oneOf(['completed', 'current', 'locked']).isRequired,
  nodeRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
}

/**
 * Connector line between two level nodes.
 */
function Connector({ index, leftStatus, rightStatus }) {
  const isBothCompleted = leftStatus === 'completed' && (rightStatus === 'completed' || rightStatus === 'current')
  return (
    <div
      data-testid={`connector-${index}`}
      className={`
        shrink-0 h-0.5 w-4 md:w-6 self-center mt-[-1.25rem]
        ${isBothCompleted ? 'bg-green-500' : 'bg-gray-600'}
      `}
      aria-hidden="true"
    />
  )
}

Connector.propTypes = {
  index: PropTypes.number.isRequired,
  leftStatus: PropTypes.string.isRequired,
  rightStatus: PropTypes.string.isRequired,
}

// -- Main Component --

function LevelMap({ currentLevel = 1 }) {
  const { t } = useTranslation()
  const currentNodeRef = useRef(null)

  // Auto-scroll to the current level on mount
  useEffect(() => {
    if (currentNodeRef.current) {
      currentNodeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [currentLevel])

  return (
    <div data-testid="level-map" className="w-full px-2">
      <div
        role="list"
        aria-label={t('levelmap.ariaLabel')}
        className="flex items-start overflow-x-auto snap-x snap-mandatory
                   gap-1 pb-2 scrollbar-hide"
      >
        {LEVELS.map((level, idx) => {
          const status = getLevelStatus(level.id, currentLevel)
          const isCurrent = status === 'current'
          const nextStatus = idx < LEVELS.length - 1
            ? getLevelStatus(LEVELS[idx + 1].id, currentLevel)
            : null

          return (
            <div key={level.id} className="flex items-start">
              <LevelNode
                level={level}
                status={status}
                nodeRef={isCurrent ? currentNodeRef : undefined}
              />
              {idx < LEVELS.length - 1 && (
                <Connector
                  index={idx}
                  leftStatus={status}
                  rightStatus={nextStatus}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

LevelMap.propTypes = {
  currentLevel: PropTypes.number,
}

export default LevelMap

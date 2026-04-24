'use client'

import React from 'react'

interface CalendarDayProps {
  day: {
    day: number
    date: string
    title: string
    dayOfWeek: string
    type: string
    distance?: string
    duration?: string
    startLocation: string
    endLocation: string
    leaves: string
    description: string
    activities: string[]
    color: string
  }
  isSelected: boolean
}

const typeIcons: { [key: string]: string } = {
  travel: '🚗',
  arrival: '🏁',
  rest: '😌',
  darshan: '🙏',
  office: '💼',
}

const getColorClasses = (color: string) => {
  const colorMap: { [key: string]: string } = {
    blue: 'from-blue-400 to-blue-600',
    green: 'from-green-400 to-green-600',
    yellow: 'from-yellow-400 to-yellow-600',
    purple: 'from-purple-400 to-purple-600',
    orange: 'from-orange-400 to-orange-600',
    cyan: 'from-cyan-400 to-cyan-600',
    red: 'from-red-400 to-red-600',
  }
  return colorMap[color] || 'from-indigo-400 to-indigo-600'
}

export default function CalendarDay({ day, isSelected }: CalendarDayProps) {
  return (
    <div
      className={`rounded-lg sm:rounded-xl shadow-lg transition-all duration-300 overflow-hidden transform hover:shadow-2xl active:shadow-md w-full ${
        isSelected ? 'ring-2 sm:ring-4 ring-white scale-100 sm:scale-105' : ''
      }`}
    >
      {/* Card Header with Gradient */}
      <div className={`bg-gradient-to-r ${getColorClasses(day.color)} p-3 sm:p-4 text-white`}>
        <div className="flex items-center justify-between mb-1 sm:mb-2">
          <span className="text-2xl sm:text-3xl">{typeIcons[day.type] || '📍'}</span>
          <span className="bg-white bg-opacity-20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
            Day {day.day}
          </span>
        </div>
        <h3 className="text-base sm:text-lg font-bold mb-0.5 sm:mb-1 line-clamp-2">{day.title}</h3>
        <p className="text-xs sm:text-sm opacity-90">{day.dayOfWeek}</p>
      </div>

      {/* Card Body */}
      <div className="bg-white p-3 sm:p-4">
        <div className="mb-3">
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
            {day.date}
          </p>
        </div>

        <div className="space-y-2 mb-3">
          {day.startLocation && (
            <div className="flex items-start gap-2">
              <span className="text-xs sm:text-sm font-semibold text-gray-600 min-w-fit flex-shrink-0">📍</span>
              <div className="text-xs sm:text-sm">
                <p className="text-xs text-gray-500">From: {day.startLocation}</p>
                {day.endLocation !== day.startLocation && (
                  <p className="text-xs text-gray-500">To: {day.endLocation}</p>
                )}
              </div>
            </div>
          )}

          {day.distance && (
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-semibold text-gray-600 flex-shrink-0">📏</span>
              <span className="text-xs sm:text-sm text-gray-700">{day.distance}</span>
            </div>
          )}

          {day.duration && (
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-semibold text-gray-600 flex-shrink-0">⏱️</span>
              <span className="text-xs sm:text-sm text-gray-700">{day.duration}</span>
            </div>
          )}
        </div>

        {/* Leave Status Badge */}
        <div className="pt-3 border-t border-gray-200">
          <span
            className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
              day.leaves === 'leave'
                ? 'bg-green-100 text-green-800'
                : day.leaves === 'optional'
                  ? 'bg-yellow-100 text-yellow-800'
                  : day.leaves === 'weekend'
                    ? 'bg-blue-100 text-blue-800'
                    : day.leaves === 'working'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-gray-100 text-gray-800'
            }`}
          >
            {day.leaves === 'optional'
              ? 'Optional Leave'
              : day.leaves === 'weekend'
                ? 'Weekend'
                : day.leaves === 'leave'
                  ? 'Leave Day'
                  : day.leaves === 'working'
                    ? 'Working Day'
                    : day.leaves}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-600 mt-3 line-clamp-2">{day.description}</p>
      </div>
    </div>
  )
}

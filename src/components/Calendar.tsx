'use client'

import React, { useEffect, useState } from 'react'
import CalendarDay from './CalendarDay'

interface ItineraryDay {
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

export default function Calendar() {
  const [itinerary, setItinerary] = useState<ItineraryDay[]>([])
  const [selectedDay, setSelectedDay] = useState<ItineraryDay | null>(null)
  const [filterType, setFilterType] = useState<string>('all')

  useEffect(() => {
    fetch('/itinerary.json')
      .then((res) => res.json())
      .then((data) => setItinerary(data.itinerary))
  }, [])

  const filteredItinerary = filterType === 'all' ? itinerary : itinerary.filter((day) => day.type === filterType)

  return (
    <div className="min-h-screen w-full py-8 sm:py-12 px-3 sm:px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 animate-fade-in">
            My Holiday Journey
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 mb-1 sm:mb-2">July 3 - July 27, 2026</p>
          <p className="text-xs sm:text-sm md:text-base text-gray-200">An epic road trip across India</p>
        </div>

        {/* Timeline Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 md:mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-3 sm:p-4 md:p-6 text-white text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">{itinerary.length}</p>
            <p className="text-xs sm:text-sm text-gray-200">Days</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-3 sm:p-4 md:p-6 text-white text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">24</p>
            <p className="text-xs sm:text-sm text-gray-200">Days of Travel</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-3 sm:p-4 md:p-6 text-white text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">5000+</p>
            <p className="text-xs sm:text-sm text-gray-200">KM Total</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-3 sm:p-4 md:p-6 text-white text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">7</p>
            <p className="text-xs sm:text-sm text-gray-200">Holy Sites</p>
          </div>
        </div>

        {/* Filter Buttons - Mobile optimized */}
        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8 md:mb-8 justify-center overflow-x-auto pb-2 sm:pb-0">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              filterType === 'all'
                ? 'bg-white text-indigo-600 shadow-lg'
                : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
            }`}
          >
            All Days
          </button>
          {['travel', 'arrival', 'rest', 'darshan', 'office'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all capitalize ${
                filterType === type
                  ? 'bg-white text-indigo-600 shadow-lg'
                  : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Calendar Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 w-full">
          {filteredItinerary.map((day) => (
            <div
              key={day.day}
              onClick={() => setSelectedDay(day)}
              className="cursor-pointer transform transition-transform duration-300 hover:scale-105 active:scale-95 w-full"
            >
              <CalendarDay day={day} isSelected={selectedDay?.day === day.day} />
            </div>
          ))}
        </div>

        {/* Detail Panel - Mobile optimized modal */}
        {selectedDay && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end sm:items-center justify-center p-0 sm:p-4 z-50">
            <div className="bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl w-full sm:max-w-2xl sm:w-full max-h-[90vh] sm:max-h-96 overflow-y-auto animate-slide-up">
              <div
                className={`bg-gradient-to-r from-${selectedDay.color}-400 to-${selectedDay.color}-600 p-4 sm:p-6 text-white rounded-t-3xl sm:rounded-t-2xl`}
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 line-clamp-2">{selectedDay.title}</h2>
                    <p className="text-sm sm:text-base md:text-lg opacity-90">{selectedDay.dayOfWeek}, {selectedDay.date}</p>
                  </div>
                  <button
                    onClick={() => setSelectedDay(null)}
                    className="text-2xl sm:text-3xl font-bold hover:bg-white hover:bg-opacity-20 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0"
                  >
                    ×
                  </button>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {selectedDay.startLocation && (
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-600 text-xs sm:text-sm font-semibold uppercase">FROM</p>
                      <p className="text-base sm:text-lg font-bold text-gray-900">{selectedDay.startLocation}</p>
                    </div>
                  )}
                  {selectedDay.endLocation && (
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-600 text-xs sm:text-sm font-semibold uppercase">TO</p>
                      <p className="text-base sm:text-lg font-bold text-gray-900">{selectedDay.endLocation}</p>
                    </div>
                  )}
                  {selectedDay.distance && (
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-600 text-xs sm:text-sm font-semibold uppercase">DISTANCE</p>
                      <p className="text-base sm:text-lg font-bold text-gray-900">{selectedDay.distance}</p>
                    </div>
                  )}
                  {selectedDay.duration && (
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-600 text-xs sm:text-sm font-semibold uppercase">DURATION</p>
                      <p className="text-base sm:text-lg font-bold text-gray-900">{selectedDay.duration}</p>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600 text-xs sm:text-sm font-semibold mb-2 uppercase">DESCRIPTION</p>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">{selectedDay.description}</p>
                </div>

                {selectedDay.activities.length > 0 && (
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 text-xs sm:text-sm font-semibold mb-3 uppercase">ACTIVITIES</p>
                    <ul className="space-y-2">
                      {selectedDay.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-indigo-600 rounded-full mr-1 mt-1.5 flex-shrink-0"></span>
                          <span className="text-sm sm:text-base text-gray-800">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

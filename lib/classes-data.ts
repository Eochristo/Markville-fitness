export interface FitnessClass {
  id: string
  name: string
  instructor: string
  day: string
  startTime: string
  endTime: string
  description: string
}

export const SCHEDULE: FitnessClass[] = [
  {
    id: "mon-1",
    name: "Boot Camp",
    instructor: "Lauris",
    day: "Monday",
    startTime: "6:00pm",
    endTime: "7:00pm",
    description: "High-intensity interval training combining cardio and strength exercises to build endurance and power.",
  },
  {
    id: "mon-2",
    name: "Yoga",
    instructor: "Danielle",
    day: "Monday",
    startTime: "7:00pm",
    endTime: "8:00pm",
    description: "Relaxing flow focusing on flexibility, balance, and mindfulness to reduce stress and improve overall wellness.",
  },
  {
    id: "mon-3",
    name: "Zumba",
    instructor: "Domingo",
    day: "Monday",
    startTime: "7:00pm",
    endTime: "8:00pm",
    description: "Dance-based cardio workout set to Latin and international music beats for a fun and energetic class.",
  },

  // Tuesday
  {
    id: "tue-1",
    name: "Yoga",
    instructor: "Shala",
    day: "Tuesday",
    startTime: "10:00am",
    endTime: "11:00am",
    description: "Relaxing flow focusing on flexibility, balance, and mindfulness to reduce stress and improve overall wellness.",
  },
  {
    id: "tue-2",
    name: "Body Tone",
    instructor: "Matteo",
    day: "Tuesday",
    startTime: "7:00pm",
    endTime: "8:00pm",
    description: "Targeted muscle-building class using light weights and resistance to sculpt and strengthen your entire body.",
  },
  {
    id: "tue-3",
    name: "Dance",
    instructor: "Veronica",
    day: "Tuesday",
    startTime: "8:00pm",
    endTime: "9:00pm",
    description: "Contemporary dance fitness combining choreography and cardiovascular training for a creative workout.",
  },

  // Wednesday
  {
    id: "wed-1",
    name: "Bootcamp",
    instructor: "Lauris",
    day: "Wednesday",
    startTime: "6:00pm",
    endTime: "7:00pm",
    description: "High-intensity interval training combining cardio and strength exercises to build endurance and power.",
  },
  {
    id: "wed-2",
    name: "Yoga",
    instructor: "Julie",
    day: "Wednesday",
    startTime: "7:00pm",
    endTime: "8:00pm",
    description: "Relaxing flow focusing on flexibility, balance, and mindfulness to reduce stress and improve overall wellness.",
  },

  // Thursday
  {
    id: "thu-1",
    name: "Yoga",
    instructor: "Shala",
    day: "Thursday",
    startTime: "10:00am",
    endTime: "11:00am",
    description: "Relaxing flow focusing on flexibility, balance, and mindfulness to reduce stress and improve overall wellness.",
  },
  {
    id: "thu-2",
    name: "Hot Yoga",
    instructor: "Mary",
    day: "Thursday",
    startTime: "7:00pm",
    endTime: "8:00pm",
    description: "Intense yoga practice in a heated room to increase flexibility, detoxify through sweating, and build core strength.",
  },
  {
    id: "thu-3",
    name: "Zumba",
    instructor: "Domingo",
    day: "Thursday",
    startTime: "7:00pm",
    endTime: "8:00pm",
    description: "Dance-based cardio workout set to Latin and international music beats for a fun and energetic class.",
  },

  // Saturday
  {
    id: "sat-1",
    name: "Yoga",
    instructor: "Sala",
    day: "Saturday",
    startTime: "9:00am",
    endTime: "10:00am",
    description: "Relaxing flow focusing on flexibility, balance, and mindfulness to reduce stress and improve overall wellness.",
  },
  {
    id: "sat-2",
    name: "Body Tone",
    instructor: "Luci",
    day: "Saturday",
    startTime: "10:00am",
    endTime: "11:00am",
    description: "Targeted muscle-building class using light weights and resistance to sculpt and strengthen your entire body.",
  },
  {
    id: "sat-3",
    name: "Zumba",
    instructor: "Domingo",
    day: "Saturday",
    startTime: "11:15am",
    endTime: "12:15pm",
    description: "Dance-based cardio workout set to Latin and international music beats for a fun and energetic class.",
  },

  // Sunday
  {
    id: "sun-1",
    name: "Hot Yoga",
    instructor: "Sala",
    day: "Sunday",
    startTime: "9:00am",
    endTime: "10:00am",
    description: "Intense yoga practice in a heated room to increase flexibility, detoxify through sweating, and build core strength.",
  },
  {
    id: "sun-2",
    name: "Cardio Tone",
    instructor: "Harrietta",
    day: "Sunday",
    startTime: "9:30am",
    endTime: "10:30am",
    description: "Energetic class combining cardio bursts with targeted muscle toning to improve heart health and strength.",
  },
  {
    id: "sun-3",
    name: "Belly Dancing",
    instructor: "Gailene",
    day: "Sunday",
    startTime: "10:30am",
    endTime: "11:30am",
    description: "Cultural dance workout focusing on hip and core movements while having fun and building confidence.",
  },
]

const DAYS_ORDER = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

export function getScheduleByDay() {
  const grouped = SCHEDULE.reduce(
    (acc, cls) => {
      if (!acc[cls.day]) {
        acc[cls.day] = []
      }
      acc[cls.day].push(cls)
      return acc
    },
    {} as Record<string, FitnessClass[]>
  )

  // Sort by time within each day
  Object.keys(grouped).forEach((day) => {
    grouped[day].sort((a, b) => {
      const timeA = convertTo24Hour(a.startTime)
      const timeB = convertTo24Hour(b.startTime)
      return timeA - timeB
    })
  })

  // Return in day order
  return DAYS_ORDER.map((day) => ({
    day,
    classes: grouped[day] || [],
  }))
}

function convertTo24Hour(time: string): number {
  const [hour, period] = time.match(/(\d+):(\d+)(am|pm)/)!.slice(1)
  let h = parseInt(hour)
  if (period === "pm" && h !== 12) h += 12
  if (period === "am" && h === 12) h = 0
  return h
}

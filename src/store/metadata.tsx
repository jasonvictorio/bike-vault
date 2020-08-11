import { createSlice } from '@reduxjs/toolkit'

export const metadata = {
  contact: '(022) 1602-902',
  address: '36 McKinley place, Hamilton, Auckland 1010',
  links: [
    {
      name: 'Mountain',
      links: [
        { name: 'All bikes', route: '/bikes/mountain' },
        { name: 'Hardtail', route: '/bikes/mountain/hardtail' },
        { name: 'Full suspension', route: '/bikes/mountain/full-suspension' },
      ],
    },
    {
      name: 'Road',
      links: [
        { name: 'All bikes', route: '/bikes/road' },
        { name: 'Race', route: '/bikes/road/race' },
        { name: 'Gravel', route: '/bikes/road/gravel' },
        { name: 'Touring', route: '/bikes/road/touring' },
      ],
    },
  ],
}

export const metadataSlice = createSlice({
  name: 'metadata',
  initialState: metadata,
  reducers: {},
})

export default metadataSlice.reducer

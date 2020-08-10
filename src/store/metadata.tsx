import { createSlice } from '@reduxjs/toolkit'

export const metadata = {
  contact: '(022) 1602-902',
  address: '36 McKinley place, Hamilton, Auckland 1010',
  links: [
    {
      name: 'Mountain',
      links: [
        { name: 'All bikes', route: '/' },
        { name: 'Hardtail', route: '/' },
        { name: 'Full suspension', route: '/' },
      ],
    },
    {
      name: 'Road',
      links: [
        { name: 'All bikes', route: '/' },
        { name: 'Race', route: '/' },
        { name: 'Gravel', route: '/' },
        { name: 'Touring', route: '/' },
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

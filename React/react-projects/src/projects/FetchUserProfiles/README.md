# User Profiles Component

## Objective
Build a component that fetches and displays a list of user profiles.

## Requirements
- Fetch data from an API endpoint, such as `https://jsonplaceholder.typicode.com/users`.
- Display each user's name, email, and address in a styled card format.
- Add a loading indicator that shows while data is being fetched.
- Display an error message if the data fetch fails.

## File Structure
This project contains the following key files:

- **`apiService.ts`**: Contains the `fetchUserProfiles` function to handle data fetching.
- **`UserProfile.tsx`**: A component responsible for rendering each individual user profile.
- **`UserProfilesList.tsx`**: The main component that fetches the data, handles state, and maps over each profile to render a `UserProfile`.

### File Descriptions

1. **`apiService.ts`**
   - This file contains the function `fetchUserProfiles` which handles the API call to fetch user data.

2. **`UserProfile.tsx`**
   - This component is responsible for rendering each individual user profile. It receives user data as props and displays it.

3. **`UserProfilesList.tsx`**
   - The main component that fetches the data, handles loading states, error handling, and maps over each profile to render a `UserProfile`.

## Bonus
- **Search Functionality**: Implement search functionality to filter users by name. This can be added in the `UserProfilesList.tsx` component by including an input field and filtering the displayed profiles based on the input value.


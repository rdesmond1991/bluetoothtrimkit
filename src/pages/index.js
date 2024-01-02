// Step 1: Import React
import * as React from 'react'
import './styles.css'; // Assuming you have a separate CSS file for styling

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <div class="background-image"></div>
      <div class="content">
        <div class="centered-text">
          <span class="fade-in-out">
            <h1>paratrim</h1>
            <p>is coming...</p>
          </span>
        </div>
      </div>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage
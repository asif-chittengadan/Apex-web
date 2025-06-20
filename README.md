# Apex Web2 - Interactive Web Page

A comprehensive web application that demonstrates modern web development techniques including form validation, responsive design, and dynamic content management.

## Features

### 1. Contact Form with Validation
- **HTML Form**: Includes text, email, phone, and textarea input fields
- **CSS Styling**: Modern, responsive form design with focus states and animations
- **JavaScript Validation**: 
  - Real-time validation on blur events
  - Required field validation
  - Email format validation
  - Phone number format validation
  - Message length validation
  - Visual error feedback

### 2. Responsive Layout
- **Flexbox Navigation**: Sticky navigation bar with smooth hover effects
- **CSS Grid Layout**: Main content organized in a responsive grid
- **Media Queries**: Fully responsive design that adapts to:
  - Desktop (1200px+)
  - Tablet (768px - 1199px)
  - Mobile (480px - 767px)
  - Small mobile (< 480px)

### 3. Dynamic To-Do List
- **Add Tasks**: Enter new tasks and add them to the list
- **Complete Tasks**: Mark tasks as completed with visual feedback
- **Delete Tasks**: Remove tasks from the list
- **Local Storage**: Tasks persist between browser sessions
- **Keyboard Support**: Press Enter to add tasks

### 4. Image Gallery
- **Add Images**: Add images by entering URLs
- **Remove Images**: Delete images from the gallery
- **Responsive Grid**: Images display in a responsive grid layout
- **Error Handling**: Fallback image for broken URLs
- **Local Storage**: Gallery persists between sessions
- **Sample Images**: Pre-loaded sample images on first visit

## Technical Implementation

### HTML Structure
- Semantic HTML5 elements
- Proper form structure with labels and validation attributes
- Accessible navigation with anchor links

### CSS Features
- **Flexbox**: Used for navigation and form layouts
- **CSS Grid**: Main content layout and image gallery
- **CSS Variables**: Consistent color scheme
- **Animations**: Smooth transitions and hover effects
- **Backdrop Filter**: Modern glassmorphism effects
- **Responsive Design**: Mobile-first approach

### JavaScript Functionality
- **Form Validation**: Comprehensive client-side validation
- **DOM Manipulation**: Dynamic content creation and management
- **Event Handling**: User interactions and form submissions
- **Local Storage**: Data persistence
- **Error Handling**: Graceful error management

## How to Use

1. **Open `index.html`** in a web browser
2. **Navigate** using the top navigation bar
3. **Contact Form**: Fill out and submit the contact form (validation included)
4. **To-Do List**: Add, complete, and delete tasks
5. **Image Gallery**: Add images by URL and manage the gallery

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## File Structure

```
├── index.html      # Main HTML file
├── styles.css      # CSS styles and responsive design
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Features in Detail

### Form Validation Rules
- **Name**: Required, minimum 2 characters, letters and spaces only
- **Email**: Required, valid email format
- **Phone**: Optional, valid phone number format
- **Message**: Required, minimum 10 characters

### Responsive Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

### Local Storage Keys
- `todos`: Stores to-do list items
- `galleryImages`: Stores image gallery URLs

## Future Enhancements

- Backend integration for form submission
- User authentication
- Advanced image upload functionality
- Dark mode toggle
- Export/import functionality for to-do lists
- Advanced filtering and sorting options

# Campus Voice
### Your Campus. Your Voice. Your Change.

**Campus Voice** is a university engagement and student grievance portal designed to provide students with a centralized platform to communicate their concerns, share feedback, and suggest improvements to campus facilities and services.

The platform aims to encourage better communication between students and university administration through a simple, organized, and user-friendly interface.

---

## 1. Project Overview

Campus Voice provides two separate access portals:

- **Student Portal:** Allows students to submit complaints, provide feedback, and share suggestions.
- **Administration Portal:** Provides administrators with an interface to review student submissions and manage complaint statuses.

The website follows a consistent visual theme called **Sunset Glow**, featuring warm red, orange, peach, and cream colours.

## 2. Key Features

### Student Portal

**Student Login**
- Student ID and password input.
- Optional student name.
- Student dashboard after login.

**Complaint Management**
- Multiple complaint categories.
- Automatic title suggestions based on the selected category.
- Detailed complaint description.
- Submission date and student information.

**Feedback Management**
- Rating system from 1 to 5 stars.
- Category-based feedback options.
- Separate Hostel and Mess selections.
- Multiple meal selections: Breakfast, Lunch, Evening Tea, and Dinner.
- Multiple selectable feedback options.
- Additional remarks.

**Suggestion Management**
- Multiple suggestion categories.
- Automatic suggestion title based on category.
- Detailed suggestion description.
- Expected improvement field.

### Administration Portal

- Separate administrator login.
- Administration dashboard.
- Total complaints overview.
- Pending and resolved complaint statistics.
- View submitted complaints.
- Update complaint status.
- View student feedback.
- View student suggestions.
- Additional administrator management and permissions interface.

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and content |
| CSS3 | Styling, layouts and responsive design |
| JavaScript | Form handling, session management and browser storage |

**Note:** The shared source code includes JavaScript embedded in HTML pages and a separate JavaScript file.

## 4. Project Structure

```text
Campus-Voice/
│
├── index.html
├── portals.html
│
├── student-login.html
├── student-dashboard.html
│
├── admin-login.html
├── dashboard.html
├── admin.html
│
├── complaint.html
├── feedback.html
├── suggestion.html
│
├── style.css
└── script.js
```

**Important:** Your shared code names the JavaScript file `style.js`, while the administration pages reference `script.js`. Make sure the filename and script references match.

## 5. Website Navigation Flow

```text
                 CAMPUS VOICE
                       |
                  index.html
                       |
                  Portal Access
                       |
                  portals.html
                       |
             ---------------------
             |                   |
        Student Portal      Admin Portal
             |                   |
       Student Login         Admin Login
             |                   |
      Student Dashboard     Admin Dashboard
             |                   |
      -----------------      View Submissions
      |       |       |          |
   Complaint Feedback Suggestion Status Updates
```

## 6. Data Storage

The shared prototype uses browser storage:

- **localStorage:** Stores complaints, feedback, suggestions, and administrator records.
- **sessionStorage:** Maintains student and administrator session information.

These mechanisms demonstrate basic browser-based data handling.

Data is not stored in a centralized database, so submissions are not automatically synchronized between different devices or browsers.

## 7. How to Run the Project

1. Download or clone the project folder.
2. Open the folder in Visual Studio Code.
3. Make sure all HTML, CSS and JavaScript files are in their correct locations.
4. Check that JavaScript filenames match their references.
5. Open `index.html` using Live Server.
6. Select Portal Access.
7. Choose Student Portal or Administration Portal.
8. Explore the available features.

## 8. Current Limitations

The current project is a front-end prototype.

- Login forms do not verify credentials against an institutional database.
- Browser storage is not suitable for secure institutional data.
- Administrator permissions are not enforced through a secure backend.
- Data is limited to the browser where it is stored.
- Real-time communication and notifications are not implemented.

## 9. Future Enhancements

The project can be extended with:

- Secure student and administrator authentication.
- Centralized database integration.
- Role-based access control.
- Complaint tracking and response notifications.
- Submission history for students.
- Advanced administrative analytics.
- Cross-device data synchronization.

## 10. Conclusion

Campus Voice aims to create a more organized and accessible communication channel between students and university administration.

By bringing complaints, feedback, and suggestions together on one platform, the project encourages students to participate in campus improvement and provides a structured interface for reviewing their concerns.

**Your Campus. Your Voice. Your Change.**

---

**Project Name:** Campus Voice  
**Project Type:** University Engagement and Student Grievance Portal  
**Development:** HTML, CSS and JavaScript  
**Status:** Front-End Prototype

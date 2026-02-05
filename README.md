# CAASPP ELA Practice Performance Task Portal

This portal acts as a repository of CAASPP-style ELA Performance Tasks. Performance tasks are provided for grades 3, 4, 5, and 6, and include at least one performance task each of:

* Informational or Explanatory writing
* Opinion or Argumentative writing
* Narrative writing

## Features

### Designed around local storage

Students can access the activity and work on it over several sessions. Their work is saved in browser storage, so as long as they are using the same device, they will have access to their own work.

The expected workflow for a student can be something like the following:

* Share a link to the assignment in Google Classroom along with a Google Doc (created with "Each student gets a copy")
* The student works on their short responses and essay
* When complete, the student clicks on "Review & Turn In" which gives them a modal from which they can copy their formatted responses and paste it into the Google Doc for submission

### Easy to customize

Each assignment comprises a single `data.js` file that takes markdown input for the articles and offers two different types of short response questions:

* `matrix`, where the student has to match which article contains the ideas described (automatically corrected)
* `short_response`, where the student can respond to a short prompt, usually comparing the content of different sources.

### Convenient printing

If you prefer working with paper copies, the repository can also be used to print out the articles in a nicely formatted packet. The print feature currently creates a packet with:

* The "Task" on the first page
* Each source (article) starting on a new page
* The short response or matrix questions being printed on their own page
* The instructions for "Part 2" (the essay) being printed on its own page

For the most part, you should be able to just print without changing any settings; from time to time, you may need to adjust the margins if there are any orphaned lines that you'd like to adjust for.
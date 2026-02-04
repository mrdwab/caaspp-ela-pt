// ASSIGNMENT DATA
// You can edit the text inside the backticks (` `) just like a normal text file.

window.assignmentData = {
    title: "Narrative Performance Task: Astronauts",
    grade: "3",

    // --- PART 2 WRITING INSTRUCTIONS (Markdown Support) ---
writingTask: `
You will now use your notes and sources to plan, draft, revise, and edit your story. Read your assignment and the information about how your story will be scored; then begin your work.

### Your Assignment

Your class is creating a book of stories about space. For this project, you decide to write a story about an astronaut. Your story tells about an adventure that happens to a character who is an astronaut traveling in space. Your story will be read by parents, teachers, and other students.

Writers often do research to add realistic detail to the setting, characters, and plot in their stories. When writing your story, find ways to use information and details from the sources to improve your story about an astronaut adventure. Make sure you develop your characters, the setting, and the plot. Use details, dialogue, and description where appropriate.

**REMEMBER: A well-written story**

* has a clear plot and a clear sequence of events.  
* is well-organized and has a point of view.  
* uses details from the sources to improve the story.  
* uses clear language.  
* follows rules of writing (spelling, capitalization, punctuation, and grammar usage).

**Now begin work on your informational article.** Manage your time carefully so that you can

1. plan your informational article.  
2. write your informational article.  
3. revise and edit the final draft of your article.

For Part 2, you are being asked to write a story that is several paragraphs long.
    `,
    
    // --- SOURCES ---
    sources: [
        {
            label: "Task",
            content: `
Your class is studying about space. Your teacher asks students to choose something about space they would like to learn more about. You decide you want to research space travel. You find two sources about the life of an astronaut.

Read the sources carefully so you will have the information you will need to write a story on a topic related to the sources.
            `
        },
        {
            label: "Source #1",
            content: `
## What is an Astronaut?

*This source describes the type of training that astronauts receive to do their job.*

by Talia Yee

Have you ever thought about what it is like in space? Astronauts are people who go out into space. Being an astronaut is an exciting job. Astronauts who see Earth from space say that it is round, like a ball. While in space, astronauts can look down and see clouds, land, and water. Some can even see the moon up close. Astronauts get the chance to see more stars than you or I have ever seen.

Being an astronaut may be exciting, but it is not an easy job. A person who wants to be an astronaut has to study for years. There are many things an astronaut must learn to do before going into space for the first time.

Astronauts train for hundreds of hours. During their training, they learn about space. This type of training might include studying the stars and Earth. It is important that astronauts study space so that they understand what they will work with while in space. The astronauts also learn medical skills like basic first aid during their training. This training allows them to treat simple medical problems so that they can keep each other healthy and safe in space.

In their training, astronauts also learn what life is like on the International Space Station (ISS). The ISS is a large spacecraft that orbits the earth. The ISS is a place where astronauts do science experiments while in space. Astronauts also learn to eat, exercise, and do experiments while floating in the air. They also practice riding in special vehicles that are just for space. These vehicles bring supplies like food and fuel to the ISS. The vehicles are about the size of a pick-up truck with 12 wheels. Astronauts even take classes in scuba diving\![^1] When they're walking underwater in their scuba suits, astronauts feel the same as they would feel walking in space. Lastly, astronauts must also learn how to work together as a team. This is important because as many as eight astronauts may be in one spacecraft. These astronauts have to learn how to live and work together in a small space.

Each astronaut has a special job to do as part of the team. Some astronauts learn how to put things together so they become good at fixing things. This is important because if something on a space ship breaks, the astronauts must be able to fix it themselves. Some astronauts are pilots who know how to fly airplanes. These astronauts have to study how to fly and steer a spaceship. They train for many hours to learn how to turn it, how to make it go faster and slower, and how to guide it through space. Some astronauts are leaders and are in charge of all of the people on the ship. They make sure that everybody is doing the right job. Other astronauts learn mostly about science. Their job is to learn how living things change when they are in space.

Although each astronaut has a special job on the team, each of them has to learn how to work where there is no gravity. When they are in a spaceship that is moving around Earth, they can feel as though they do not weigh anything. They are able to float. Many astronauts say that it is fun to float around the inside of a spaceship. Objects in the spaceship can also float, so astronauts can lift and move heavy things easily.

Feeling weightless is fun, but being in space is work for astronauts. Astronauts must be healthy and eat right. They have to exercise and be in good shape. Astronauts have many adventures, but they work hard, too.

[^1]:  scuba diving: swimming under water with a special suit, air tank, and fins
            `
        },
        {
            label: "Source #2",
            content: `
## Life in Space

*This article describes what happens to astronauts' bodies when they go into space.*

by Aaron Higgins

Many people say they want to be an astronaut, but do they know what it's really like? When astronauts are in space, they feel weightless. They can float. This sounds like fun, but it is not that simple. The human body is used to being on Earth, but some people stay out in space for months. A lot of strange things happen to the body when it floats for that long.

Astronauts sometimes feel sick in space. It takes a few days for them to get used to feeling weightless and being able to float.

Being in space also changes how blood flows in the body. In space, more blood flows to the astronauts' heads so their faces get puffy and their necks get bigger. At the same time, less blood flows to their legs, making them skinny. They call this condition "bird legs."

The heart is a muscle that pumps blood around the body. The heart does not have to work as hard to pump blood in space. A muscle that does not work hard gets weaker and smaller. Astronauts' other muscles and their bones can also get weaker. This is because they do not have to work as hard to move the astronaut's body.

To help keep their muscles strong, astronauts have to do exercises when they are in space. They use big rubber bands attached to the walls of the space ship and hook them over their shoulders. Then they bend their knees and press against the rubber bands to make their legs stronger.

Even with regular exercise in space, astronauts come back feeling weak. It takes time for them to get back their Earth legs and learn how to live with gravity again.
            `
        }
    ],

    // --- QUESTIONS ---
    questions: [
        {
            type: "matrix",
            prompt: "Mark the boxes to match each source with the idea or ideas that it supports. Some ideas may have more than one source selected.",
            headers: ["Source 1", "Source 2"],
            rows: [
                { text: "Astronauts feel weak when they come back from space.", answer: [false, true] },
                { text: "Since objects are also able to float in space, astronauts can easily lift things in space that are heavy on Earth.", answer: [true, false] },
                { text: "Astronauts have a special view of Earth from space.", answer: [true, false] }
            ]
        },
        {
            type: "short_response",
            prompt: "Explain why it is hard to be an astronaut. Give two reasons, one from Source 1 and one from Source 2. For each reason, include the source title or number."
        }
    ]
};
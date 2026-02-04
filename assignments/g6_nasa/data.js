// ASSIGNMENT DATA
// You can edit the text inside the backticks (` `) just like a normal text file.

window.assignmentData = {
    title: "Explanatory Performance Task: Black Women at NASA",
    grade: "6",

    // --- PART 2 WRITING INSTRUCTIONS (Markdown Support) ---
writingTask: `
You will now plan, draft, revise, and edit your writing. You may use your notes and go back to the sources. Now read your assignment and the information about how your writing will be scored, then begin your work. 

### Your assignment

Your teacher wants each student to write an explanatory article that will be displayed during Black History Month. You decide to write about black women at NASA in the early years of space exploration. Your article will be read by other students, teachers, and parents. 

Using more than one source, develop a main idea about the role of women at NASA, particularly black women. Choose the most important information from more than one source to support your main idea. Then, write an explanatory article about your main idea that is several paragraphs long. Clearly organize your article and support your main idea with details from the sources. Use your own words except when quoting directly from the sources. Be sure to give the source title or number when using details from the sources. 

REMEMBER: A well-written explanatory article 

* Has a clear main idea   
* Is well-organized and stays on topic   
* has an introduction and conclusion   
* Uses transitions  
* Uses details from the sources to support your main idea  
* Puts the information from the sources in your own words, except when using direct quotations from the sources  
* Gives the title or number of the source for the details or facts that you included   
* Develops ideas clearly   
* Uses clear language   
* Follows rules of writing (spelling, punctuation, and grammar)
    `,
    
    // --- SOURCES ---
    sources: [
        {
            label: "Task",
            content: `
Your class is preparing student displays for Black History Month. Your class has decided to focus on black women at NASA in the early years of space exploration. You have found two sources about the topic on NewsELA. 

After you have looked at these sources, you will write an explanatory piece. Briefly scan the writing prompt and sources that follow. Then, go back and read the sources carefully so you will have the information you will need to respond to the writing prompt. 
            `
        },
        {
            label: "Source #1",
            content: `
## The history of women at NASA

*By National Geographic Society, adapted by Newsela staff on 11.19.20*

| ![](image1.jpg) |
| :---- |
| *Mae Jemison on board the space shuttle Endeavor. In 1992, Jemison became the first Black woman to fly in space. Photo: NASA* |

In 1958, the United States government created NASA. Women have always been an important part of NASA. But for many years, women were not allowed as astronauts. Most women there worked behind the scenes.

Today, people realize the important roles women have played during NASA's history.

### Human Computers

During the early days of NASA, the agency hired many women as human computers. Back then, the term computer referred to a job title for someone who performed difficult mathematical calculations. Human computers made sense of data, or information, for experiments and, eventually, spaceflights. They carried out these calculations by hand.

All of NASA's human computers were women. Many of them were Black women. Mary Jackson, Katherine Johnson, and Dorothy Vaughan were especially influential Black women computers. Their work helped one of the first American astronauts, John Glenn, orbit, or travel around, Earth in 1962\. 

Once NASA began using electronic computers, it no longer needed human computers. Instead, NASA needed computer programmers. These are people who write code, which is a set of instructions that tells a computer what to do. Many of these early programmers were women.

### Women Go To Space

In 1961, NASA launched its first astronaut, Alan Shepard, into space. Three weeks later, President John F. Kennedy challenged the U.S. to a very large goal of "landing a man on the Moon." But Kennedy's statement only meant "men." Even in the 1960s, NASA did not allow women astronauts.

The Soviet Union was the first to send a woman into space. In 1963, Valentina Tereshkova orbited Earth on a Soviet mission. Finally, in 1983, NASA sent the first American woman into space. Her name was Sally Ride. She flew on the space shuttle Challenger. A space shuttle is a vehicle that travels into space, launched by a rocket.

Since Sally Ride's first mission, at least 50 women have now flown on NASA space missions. In 1992, Mae Jemison became the first Black woman to fly in space. In 1999, NASA astronaut Eileen Collins became the first woman to command a space shuttle mission.

### Breaking Barriers

In 2018, NASA named Holly Ridings as its first female flight director in mission control. A mission control center is a facility that manages space flights.

In 2019, astronauts Christina Koch and Jessica Meir made history. They became the first two women to do a spacewalk with only women. A spacewalk is an event where the astronauts leave their vehicle and go out into space.

NASA kept women in the background during its early years. But today, NASA says it hopes to keep improving its opportunities for women in space.
            `
        },
        {
            label: "Source #2",
            content: `
## Katherine Johnson, Mary Jackson and Dorothy Vaughan: Scientists with NASA

*By Rebel Girls, adapted by Newsela staff on 02.10.21*

| ![](image2.webp) |
| :---- |
| *Image 1\. Katherine Johnson (left), Mary Jackson (center) and Dorothy Vaughan (right) held important mathematical jobs at NASA. Photos: NASA. Arranged by Newsela staff* |

Today, we know of a computer as a machine. Computers process data, or information very quickly.

They can perform complex math problems. 

But before machine computers were widely used, humans did the work.  Dorothy Vaughn, Katherine Johnson and Mary Jackson were all human computers. They were also brilliant mathematicians and Black women who worked at NASA. 

NASA is the government group responsible for the American space program. The group was created in 1958 to study the possibility of space flight. In order to do this, they needed people to solve complex math problems. This data helped them determine if astronauts could travel safely to space.

### Computers And Space Travel

NASA bought its first computer in the 1960s. The computer came from a company called IBM.

Back then, only a few people in the world knew how to use one for business, like bills or record keeping. No one knew how to use it for space travel\! 

Vaughn taught herself Fortran. It is a computer programming language. The language is a set of instructions that tells the computer how to solve calculations. By doing so, she became an expert at using computers for science and math.

### Female Scientist Ensures Safety For Astronaut

Johnson was part of a team that planned spacecraft trajectories. A trajectory is the path a spacecraft follows. In 1962, John Glenn was about to become the first astronaut to orbit the Earth. To orbit something is to travel around it. The IBM computer calculated the spacecraft's path. However, Glenn did not completely trust the computer. 

Before his flight, he asked Johnson to check the flight path calculations herself. "As long as she says the numbers are good, I'm ready to go," he said. Johnson checked the computer's calculations. She was able to give Glenn the information he needed to successfully complete his mission. 

### First Female Aeronautical Engineer 

Later, Jackson moved to a department that studied how fast-flying aircraft like fighter jets move through the air. They used a tunnel that produces winds at speeds faster than the speed of sound. 

Jackson studied how air behaved or moved around planes. Her work helped NASA build better spacecraft. She became the first African American female aeronautical engineer. These types of engineers develop and test aircraft systems.

### Inspiring The Future Of Space Travel

Vaughn, Johnson and Jackson overcame incredible odds. Still, their important work remained unknown for many years. Today, they are celebrated as three of the most inspiring figures in the history of space travel.
            `
        }
    ],

    // --- QUESTIONS ---
    questions: [
        {
            type: "matrix",
            prompt: "Read the sentences in the \"Idea\" column. Place a checkmark in the box to show which article supports that idea. You may check both boxes if both articles support the idea.",
            headers: ["Source 1", "Source 2"],
            rows: [
                { text: "John Glenn trusted a human mathematician more than the electronic computer.", answer: [false, true] },
                { text: "Women were once hired as \"human computers\" to solve difficult math problems by hand.", answer: [true, true] },
                { text: "Women have recently taken on new leadership roles like flight director.", answer: [true, false] }
            ]
        },
        {
            type: "short_response",
            prompt: "Explain how the role of women at NASA changed when electronic computers were introduced. Give one detail from Source 1 and one detail from Source 2. For each detail, include the source title or number."
        }
    ]
};
// ASSIGNMENT DATA
// You can edit the text inside the backticks (` `) just like a normal text file.

window.assignmentData = {
    title: "Informational Performance Task: Black Women at NASA",
    grade: "3",

    // --- PART 2 WRITING INSTRUCTIONS (Markdown Support) ---
writingTask: `
### Your Assignment
Your teacher wants each student to write an informational article that will be displayed during Black History Month. You decide to write about black women at NASA in the early years of space exploration. Your article will be read by other students, teachers, and parents. 

Using more than one source, develop a main idea about the role of women at NASA, particularly black women. Choose the most important information from more than one source to support your main idea. Then, write an informational article about your main idea that is several paragraphs long. Clearly organize your article and support your main idea with details from the sources. Use your own words except when quoting directly from the sources. Be sure to give the source title or number when using details from the sources. 

REMEMBER: A well-written informational article 

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

After you have looked at these sources, you will write an information piece. Briefly scan the writing prompt and sources that follow. Then, go back and read the sources carefully so you will have the information you will need to respond to the writing prompt.

You will now plan, draft, revise, and edit your writing. You may use your notes and go back to the sources. Now read your assignment and the information about how your writing will be scored, then begin your work. 
            `
        },
        {
            label: "Source #1",
            content: `
# The history of women at NASA

*By National Geographic Society, adapted by Newsela staff on 11.19.20*

| ![Mae Jemison on board the space shuttle Endeavor.](image1.jpg) |
| :---- |
| *Mae Jemison on board the space shuttle Endeavor. In 1992, Jemison became the first Black woman to fly in space. Photo: NASA* |

In 1958, the United States government created NASA. Women have always been an important part of NASA. But for many years, women were not allowed as astronauts. Most women there worked behind the scenes.

Today, people realize that these women did important work. Women have made many contributions to NASA during its history. 

## Human Computers

During the early days of NASA, many women worked as human computers. Back then, the word computer referred to a job. Human computers were people who did mathematical calculations.

They did these calculations by hand. Human computers made sense of data, or information, for experiments. They also made sense of data for spaceflights.

All of the human computers at NASA were women. Many of them were Black women. Katherine Johnson was a Black woman. She was a famous human computer. Along with others, her work helped astronauts orbit, or travel around, Earth. 

Later, NASA began using electronic computers. They needed computer programmers. These are people who write code. This is a set of instructions that tells a computer what to do. Many of these early programmers were women. 

## Women Go To Space

In 1961, NASA launched its first astronaut into space. Three weeks later, President John F. Kennedy gave a speech. He wanted the U.S. to land a man on the moon. In the 1960s, NASA did not allow women astronauts.

In 1963, the Soviet Union became the first to send a woman into space. In 1983, NASA sent the first American woman into space. Her name was Sally Ride. She flew on the space shuttle Challenger. A space shuttle is a vehicle that travels into space.

At least 50 women have now flown on NASA space missions. In 1992, astronaut Mae Jemison flew to space. She was the first Black woman to do so. 

## Breaking Barriers

In 2019, astronauts Christina Koch and Jessica Meir made history. They became the first two women to do a spacewalk with only women. A spacewalk is an event where the astronauts leave their vehicles. They travel out into space.

NASA kept women in the background during its early years. But NASA has worked to change that. Today, NASA says it wants to make more opportunities for women in space.
            `
        },
        {
            label: "Source #2",
            content: `
# Katherine Johnson, Mary Jackson and Dorothy Vaughan: Scientists with NASA

*By Rebel Girls, adapted by Newsela staff on 02.10.21*

| ![Johnson, Jackson, and Vaughan.](image2.webp) |
| :---- |
| *Image 1\. Katherine Johnson (left), Mary Jackson (center) and Dorothy Vaughan (right) held important mathematical jobs at NASA. Photos: NASA. Arranged by Newsela staff* |

Today, we know of a computer as a machine. Computers process data, or information. They perform complex math problems. They do them very quickly. 

But before there were machine computers, humans did the work. Dorothy Vaughn, Katherine Johnson and Mary Jackson were all human computers. They were also brilliant mathematicians and Black women. They worked at NASA. 

NASA is the government group. They handle the American space program. The group was created in 1958 to study the possibility of space flight. In order to do this, they needed people. The people solved complex math problems. This data helped them figure out if astronauts could travel safely to space.

## Computers And Space Travel

NASA bought its first computer in the 1960s. A company called IBM made the computer. People only used computers for business. They kept track of bills and records. No one knew how to use it for space travel\!

Vaughn wanted to know how to use the computer. She taught herself Fortran. It is a computer language. It is a set of instructions. Fortran tells computers how to solve math problems. Vaughn became an expert at the computer. She used it for science and math. 

## Astronaut Flies Safely Because Of Female Scientist

Johnson used math to study flight paths. Every aircraft needs to follow a path to fly. It keeps everyone safe. 

John Glenn was an astronaut. In 1962, he was about to make history. He was going to be the first astronaut to travel around the Earth\! But the IBM computer calculated his flight path. He did not trust it. 

Before his trip, Glenn asked Katherine to check the calculations herself. "As long as she says the numbers are good, I'm ready to go," Glenn said. Katherine looked at the computer's work. She told Glenn it was correct. He safely completed his mission.

## Building Better Aircraft

Later, Jackson moved to a different department. They studied how fighter jets move through the air. They used a tunnel. It produced winds at very high speeds. 

Jackson studied how air moved around planes. Her work helped NASA build better spacecraft. 

Jackson also became an aeronautical engineer. She was the first African American female to do so. These types of engineers develop and test aircraft systems.

## Women Scientists Make History

The work of these women went unknown for many years. Today, their achievements are celebrated.

People think of them as inspiring figures.
            `
        }
    ],

    // --- QUESTIONS ---
    questions: [
        {
            type: "matrix",
            prompt: "Place a checkmark in the boxes to match each source with the idea or ideas that it supports. Some ideas may have more than one source selected.",
            headers: ["Source 1", "Source 2"],
            rows: [
                { text: "John Glenn trusted a human mathematician more than the electronic computer.", answer: [false, true] },
                { text: "Women were once hired as 'human computers' to solve difficult math problems by hand.", answer: [true, true] },
                { text: "At least 50 women have flown on NASA space missions.", answer: [true, false] }
            ]
        },
        {
            type: "short_response",
            prompt: "Explain how the role of women at NASA changed when electronic computers were introduced. Give one detail from Source 1 and one detail from Source 2. For each detail, include the source title or number."
        }
    ]
};
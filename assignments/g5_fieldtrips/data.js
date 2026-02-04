// ASSIGNMENT DATA
// You can edit the text inside the backticks (` `) just like a normal text file.

window.assignmentData = {
    title: "Opinion Performance Task: Virtual Field Trips",
    grade: "5",

    // --- PART 2 WRITING INSTRUCTIONS (Markdown Support) ---
writingTask: `
You will now review your sources, take notes, and plan, draft, revise, and edit your writing. You may use your notes and go back to the sources. 

### Your Assignment

The school district officials are meeting next month to decide how to spend their $15,000 field trip budget. You will write an opinion essay answering the question: **Should the school district spend the budget on real field trips or VR headsets?** Make sure you clearly state your opinion and write several paragraphs supporting your opinion with reasons and details from the sources. Develop your ideas clearly and use your own words, except when quoting directly from the sources. Be sure to give the source title or number for the details or facts you use.

REMEMBER: A well-written opinion essay:

* has a clear opinion  
* is well-organized and stays on the topic  
* has an introduction and conclusion  
* uses transitions   
* uses details or facts from the sources to support your opinion  
* puts the information from the sources in your own words, except when using direct quotations from the sources  
* gives the title or number of the source for the details or facts you included  
* develops ideas clearly  
* uses clear language  
* follows rules of writing (spelling, punctuation, and grammar)

Now begin work on your opinion essay. Manage your time carefully so that you can:

1. plan your opinion essay  
2. write your opinion essay  
3. revise and edit the final draft of your opinion essay
    `,
    
    // --- SOURCES ---
    sources: [
        {
            label: "Task",
            content: `
The school district has a budget of $15,000 to spend on field trips this year. They are deciding between two options:

1. Spend the money on buses and tickets for traditional field trips.  
2. Spend the money to buy a class set of Virtual Reality (VR) headsets that will be kept in the library and pay for apps that provide virtual trips.

You have been asked to write an essay giving your opinion on this issue. You have three sources to review:

* Source 1 explains the benefits and costs of Virtual Reality.  
* Source 2 argues for the importance of real-world experiences.  
* Source 3 discusses whether VR is actually better than watching videos.

In Part 2, you will write an opinion essay using the information you’ve read.

## Directions for Beginning

You will now look at three sources. You can look at the sources as often as you like.

## Research Questions

After looking at the sources, use the rest of the time in Part 1 to answer question(s) about them. Your answers will be scored. Also, your answers will help you think about the information you have read and looked at, which should help you write.

You may look at your notes when you think it would be helpful. Answer the questions in the spaces below them.
            `
        },
        {
            label: "Source #1",
            content: `
## The World in a Headset

From Tech for Schools Magazine

Imagine standing on the dusty red surface of Mars. You look to your left and see a rover analyzing a rock. You look up and see two moons in the sky. Now, imagine taking off your goggles and realizing you are still in your classroom\!

This is the power of Virtual Reality (VR). For many years, field trips were limited to places a school bus could drive to in one day. With VR technology, students can visit the Great Wall of China or the bottom of the ocean instantly.

### **Safety and Access** 

VR trips solve many problems for schools. Traditional trips can be stressful. Teachers have to worry about students getting lost in a big museum or injured. In a virtual trip, every student is safe in their seat. Furthermore, VR gives every student an equal chance to travel. Not every family can afford to send their child on expensive trips to Washington D.C. With VR, a student can walk through the White House without paying for a plane ticket.

***Table 1: Cost Comparison of Real vs Virtual Trips for 100 Students***

| Expense Item | Real Trip (Example: City Zoo) | Virtual Trip (VR Headsets) |
| :---- | :---- | :---- |
| **Equipment Cost** | $0 (Nothing to buy) | **$10,000** (To buy 30 headsets) |
| **Bus Rental** | **$800** per day | $0 |
| **Tickets/ Admission** | **$1,500** ($15 per student) | $0 |
| **Software/ Apps** | $0 | **$50** per "trip" |
| **Total Cost** | **$2,300** for ONE day | **$10,050** for the WHOLE year |

### **Learning More** 

Some teachers argue that VR is actually better for learning than a real trip. In a crowded museum, it can be hard to hear the tour guide. In a virtual world, the "guide" speaks directly into your headphones. You can zoom in on a painting or replay a historical speech as many times as you want.

### **The Cost Difference** 

Critics argue that VR headsets are too expensive. It is true that buying the equipment costs a lot of money upfront. However, once the school owns the headsets, the "trips" are almost free. Real field trips cost money every single time the bus leaves the parking lot.
            `
        },
        {
            label: "Source #2",
            content: `
## The Magic of Being There

From Museum Curator Monthly

Technology is amazing, but a screen will never be the same as real life. While VR headsets can show you a picture of a forest, they cannot let you smell the pine trees or feel the crunch of leaves under your boots.

### **The Sensory Experience** 

Real field trips provide a "multisensory" experience. This means you learn with more than just your eyes. When students visit a living history farm, they can touch the wool of a sheep. When they visit an aquarium, they can feel the splash of cold water. These physical memories help students remember what they learned much better than a video ever could.

### **Social Skills** 

Field trips are also about learning how to be part of a community. Riding the bus with friends, eating lunch in a new park, and asking a tour guide questions are important social moments. Students learn how to behave in public and how to interact with strangers.

Dr. Arlene Miller, a child psychologist, worries that VR trips will make students more lonely. "School is supposed to be about doing things together," she says. "If every student is wearing a headset with a screen over their eyes, they are alone in their own little world. They aren't talking to their friends or their teacher."
            `
        },
        {
            label: "Source #3",
            content: `
## Just Another Screen?

From Education Trends Weekly

Computers in the classroom have changed a lot. In the 1980s, students watched movies on heavy televisions rolled in on carts. In the 2000s, schools bought "Smart Boards" and tablets. Today, Virtual Reality (VR) is the newest trend. But is it actually helpful, or is it just a fancy toy?

### **Active vs. Passive Learning** 

Supporters of VR say it is "immersive." This means the student feels like they are inside the action. Studies show that when students feel like they are inside a historical event, they remember more details than if they just read a textbook.

However, some teachers argue that VR is just a different way of watching a video. "If I put a video of a volcano on the Smart Board, my students watch it together and we talk about it," says science teacher Mark Evans. "If they put on headsets, they are just staring at a tiny screen by themselves."

### **The "Dizzy" Factor** 

There are also physical problems. Many students report feeling "motion sickness" or dizziness after wearing a VR headset for more than 15 minutes. Because of this, VR lessons have to be very short. A real field trip lasts all day, but a virtual field trip might only last 20 minutes before the students need a break.    
            `
        }
    ],

    // --- QUESTIONS ---
    questions: [
        {
            type: "matrix",
            prompt: "The chart below lists details from the articles. For each detail, check the box to indicate if the information comes from Source 1, Source 2, or Source 3. Some details may be found in more than one source.",
            headers: ["Source 1", "Source 2", "Source 3"],
            rows: [
                { text: "Argues that buying headsets is a one-time cost that saves money over time.", answer: [true, false, false] },
                { text: "Mentions that using VR headsets can make students feel alone or isolated.", answer: [false, true, true] },
                { text: "States that VR can cause physical problems like dizziness or motion sickness.", answer: [false, false, true] }
            ]
        },
        {
            type: "short_response",
            prompt: "Explain why some people believe Virtual Reality is not as good as a real trip. Give one reason about \"social skills\" from Source 2 and one reason about \"physical problems\" from Source 3."
        }
    ]
};
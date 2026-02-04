// ASSIGNMENT DATA
// You can edit the text inside the backticks (` `) just like a normal text file.

window.assignmentData = {
    title: "Opinion Performance Task: Classroom Pets",
    grade: "3",

    // --- PART 2 WRITING INSTRUCTIONS (Markdown Support) ---
writingTask: `
You will now review your sources, take notes, and plan, draft, revise, and edit your writing. You may use your notes and go back to the sources. Now read your assignment and the information about how your writing will be scored; then begin your work.

### Your Assignment

Your class teacher has agreed to adopt a classroom pet. Your teacher has narrowed down the choices of animals to a guinea pig or a bearded dragon. 

You will write an opinion essay in which you give your opinion on which type of pet would be better for your classroom. Make sure you clearly state your opinion and write several paragraphs supporting your opinion with reasons and details from the sources. Develop your ideas clearly and use your own words, except when quoting directly from the sources. Be sure to give the source title or number for the details or facts you use.

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
Your class is thinking about getting a classroom pet. You and your classmates have been learning about different animals that are kept as pets. You want to learn more and decide to do more research on what animals make the best classroom pets. You have found two articles about classroom pets.

After you have looked at these sources, you will answer some questions about them. Briefly scan the sources and the questions that follow. Then, go back and read the sources carefully so you will have the information you will need to answer the questions and complete your research.

In Part 2, you will write an opinion essay using information you have read.

## Directions for Beginning

You will now look at two sources. You can look at the sources as often as you like.

## Research Questions

After looking at the sources, use the rest of the time in Part 1 to answer question(s) about them. Your answers will be scored. Also, your answers will help you think about the information you have read and looked at, which should help you write.

You may look at your notes when you think it would be helpful. Answer the questions in the spaces below them. 
            `
        },
        {
            label: "Source #1",
            content: `
# A Fuzzy Friend for Room 3B

*From Kids Life Magazine*

When Mrs. Gable walked into the classroom on Monday morning, she was holding a large box. "Class," she said, "I would like you to meet our new student." She pulled off the blanket to reveal a large, wire cage. Inside were two furry, potato-shaped animals. They were guinea pigs\!

Having a pet in the classroom is about more than just having fun. Teachers say that animals help students learn responsibility. Someone has to feed the pet, give it water, and clean the cage. It teaches kids how to care for another living thing.

## **Why We Love Guinea Pigs**

Guinea pigs are one of the best pets for kids. Unlike hamsters, which sleep all day, guinea pigs are awake when you are at school. They are very friendly and social. In fact, they can be quite loud\! When a guinea pig hears a bag of carrots opening, it might let out a loud whistle. This sound is called "wheeking." It is their way of saying, "Feed me, please\!"

They also have a funny way of showing they are happy. When they are excited, they jump straight up in the air and kick their legs out. This is called "popcorning" because they look like kernels of corn popping in a microwave.

## **Hard Work**

However, guinea pigs are not easy to take care of. They are much bigger than mice, so they need a very large cage. The cage takes up a lot of space on a table or the floor.

They are also messy. Because they eat all day, they poop all day. The bedding in their cage needs to be scooped out every day, or the classroom will start to smell bad. Also, guinea pigs get lonely easily. You should never buy just one. You need to get two so they have a friend. That means you have to buy twice as much food\!

Despite the work, Mrs. Gable’s class loves their new friends. "They are soft and sweet," said one student. "I wouldn't want any other pet."
            `
        },
        {
            label: "Source #2",
            content: `
## **The Science of Calm**

Science shows that having an animal in the room helps students feel better. If a student is feeling sad or angry, spending a few minutes with a calm animal can lower their heart rate. This helps them get back to work.

Bearded Dragons are famous for being the calmest lizards in the world. They are native to the deserts of Australia. They are very docile, which means they are gentle and not aggressive. They rarely bite. Because they are so calm, they will happily sit on a student's shoulder during reading time.

***What Teachers Are Choosing***

| **Rank** | **Animal** | **Percentage of Teachers** | **Fun Fact** |
| :---- | :---- | :---- | :---- |
| 1 | **Freshwater Fish** | 31% | Watching fish swim can improve focus. |
| 2 | **Guinea Pig** | 14% | They have teeth that never stop growing. |
| 3 | **Hamster** | 11% | They can run up to 5 miles a night on a wheel. |
| 4 | **Bearded Dragon** | 9% | They can change the color of their "beard" (neck). |
| 5 | **Rabbit** | 5% | Their big ears help keep them cool. |

*Every year, the National Teacher Association asks elementary school teachers about the animals in their classrooms. This table shows the top 5 animals chosen by teachers this year.* 

## **No Sneezing Allowed**

One of the biggest problems with classroom pets is allergies. Many students are allergic to the dander (dead skin flakes) found on furry animals like rabbits, hamsters, or guinea pigs.

Bearded dragons are reptiles. They have scales, not fur. This makes them hypoallergenic. A hypoallergenic animal is one that is unlikely to cause an allergic reaction. This means every student in the class can touch and hold the pet safely.

## **Habitat and Diet**

Taking care of a reptile is very different from taking care of a mammal. A bearded dragon needs a glass tank called a terrarium. Because they are from the desert, they need it to be hot. You must use special heat lamps to keep their tank at 100 degrees Fahrenheit. If the bulbs burn out, the lizard can get sick.

Their diet can also be a challenge for some teachers. Bearded dragons love to eat leafy greens, like kale. But they also need protein. This means you must feed them live bugs. You have to keep a box of live crickets or roaches in the classroom. For some students and teachers, handling bugs is just too gross\!
            `
        }
    ],

    // --- QUESTIONS ---
    questions: [
        {
            type: "matrix",
            prompt: "The chart below lists details about the animals described in the articles. For each detail, check the box to show if the information comes from Source 1, Source 2, or Both.",
            headers: ["Source 1", "Source 2"],
            rows: [
                { text: "Teachers say this pet helps students learn responsibility.", answer: [true, true] },
                { text: "This animal needs a special lamp to keep it warm.", answer: [false, true] },
                { text: "This animal needs a very large cage that takes up space.", answer: [true, false] }
            ]
        },
        {
            type: "short_response",
            prompt: "Explain why taking care of a classroom pet can be hard work. Give one example of a challenge with guinea pigs from Source 1 and one example of a challenge with bearded dragons from Source 2. For each example, include the source title or number."
        }
    ]
};
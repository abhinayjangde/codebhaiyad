"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import gitgithub from "@/../public/courses/gitandgithub.jpg"
import { FaCodeBranch } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const GitHub = () => {

    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [course, setCourse] = useState("Matrix-Web-Dev-Course-In-Hindi")
    // Send alert for course
    const sendAlertForCourse = async (e: React.MouseEvent) => {
        try {
            e.preventDefault()
            setLoading(true)
            const data = {
                email: email,
                courseName: course
            }
            if (email.length <= 0 || email === "") {
                toast("Please enter your email.")
                setLoading(false)
            }
            else {
                const res = await axios.post("/api/coursealert", data)
                toast("Message send successfully")
                setEmail("")
                setLoading(false)
            }
        } catch (error: any) {
            toast(error.message)
            setLoading(false)
        }
    }
    useEffect(() => {
        document.title = 'Matrix Web Dev Course - The right way to learn coding'
    }, [])
    return (
        <>

            <div className="h-[70rem] sm:h-[60rem] w-full dark:bg-dark bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>

                <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
                {/* Top Course Thambnail  */}
                <div className='sm:pt-28 pt-10 flex sm:flex-row flex-col items-center justify-center gap-10'>
                    <div className='flex flex-col justify-center items-start gap-4 px-10 sm:px-0 sm:w-[40rem] dark:text-white'>

                        <div
                            className={cn(
                                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                            )}
                        >
                            <AnimatedShinyText className="inline-flex sm:text-xl items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 uppercase">
                                <FaCodeBranch className="mr-1" />
                                <span>Master the version control</span>
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </AnimatedShinyText>
                        </div>
                        <h2 className='text-3xl sm:text-5xl font-semibold uppercase'>Mastering Git & GitHub</h2>
                        <p className='text-lg sm:text-xl px-1 bg-white dark:bg-dark '>
                            Learn the core concepts of version control, explore essential commands, and branching, merging, and collaboration. This course also covers behind-the-scenes mechanisms like Git's object model and internal data storage.</p>
                        <Tabs defaultValue="account" className="w-[400px]">
                            <TabsList>
                                <TabsTrigger value="content">Course Content</TabsTrigger>
                                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                            </TabsList>
                            <TabsContent value="content">
                         
                                    <div className='container bg-slate-100 dark:bg-black/[0.7]'>
                                        <div className='w-full flex flex-col items-center justify-center gap-4'>
                                            <Accordion type="single" collapsible className="w-full">
                                                <AccordionItem value="item-1">
                                                    <AccordionTrigger>Introduction</AccordionTrigger>
                                                    <AccordionContent>
                                                        <ul className='ml-2'>
                                                            <li>- Who am I ?</li>
                                                            <li>- How to use Gen AI in Developemnt ?</li>
                                                        </ul>
                                                    </AccordionContent>
                                                </AccordionItem>
                                                <AccordionItem value="item-2">
                                                    <AccordionTrigger>Fundamentals</AccordionTrigger>
                                                    <AccordionContent>
                                                        <ul className='ml-2'>
                                                            <li>- What is internet ?</li>
                                                            <li>- World Wide Web</li>
                                                        </ul>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </div>
                                    </div>
                  
                            </TabsContent>
                            <TabsContent value="reviews">
                                <div className="flex flex-col gap-4">
                                    <span className="dark:bg-black">avatar
Muthu
1 Oct 2024 4:20 PM

5 out of 5 stars
great course, Learnt a lot,The last session on debugging the error which we faced because of curl was engaging . Thanks for the course sir</span>
                                    <span className="dark:bg-black">avatar
Muthu
1 Oct 2024 4:20 PM

5 out of 5 stars
great course, Learnt a lot,The last session on debugging the error which we faced because of curl was engaging . Thanks for the course sir</span>
                                    <span className="dark:bg-black">avatar
Muthu
1 Oct 2024 4:20 PM

5 out of 5 stars
great course, Learnt a lot,The last session on debugging the error which we faced because of curl was engaging . Thanks for the course sir</span>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div className="p-4 md:w-1/3 flex justify-center">
                        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg dark:bg-black/[0.5] bg-white/[0.8]">
                            <Image
                                className="object-contain w-full object-center"
                                src={gitgithub}
                                width={384}
                                height={216}
                                alt="Git&GitHub"
                            />
                            <div className="px-6 md:my-11 lg:my-0 md:h-72 lg:h-64 lg:py-4 xl:h-52">
                                <span className="tracking-widest text-xs title-font font-medium mb-1 dark:text-gray-400">
                                    FREE COURSE
                                </span>
                                <div className="title-font flex text-lg font-medium text-black mb-3 dark:text-white">
                                    Git & GitHub Course
                                </div>
                                <p className="text-black text-base dark:text-gray-400">
                                    Learn the core concepts of version control, explore essential
                                    commands, and branching, merging, and collaboration. This
                                    course also covers behind-the-scenes mechanisms like
                                    Git&apos;s object model and internal data storage.
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <Link href={"/git-github"} target="">
                                    <span className="inline-block text-white bg-blue-700 rounded-full px-3 py-2 text-sm font-semibold mr-2 my-2 cursor-pointer hover:bg-blue-600">
                                        {" "}
                                        Start Watching{" "}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Know Your Curriculum  */}
            {/* <div className='w-full pb-10 dark:bg-dark bg-white'>
                <div className='flex items-center justify-center gap-4 py-10'>
                    <AnimatedShinyText className="text-2xl md:text-4xl uppercase font-semibold inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 ">
                        <span>Curriculum</span>
                    </AnimatedShinyText>
                </div>
                <div className="container">
                    <div className='container bg-slate-100 dark:bg-black/[0.7]'>

                        <div className='w-full flex flex-col items-center justify-center gap-4'>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Introduction</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className='ml-2'>
                                            <li>- Who am I ?</li>
                                            <li>- How to use Gen AI in Developemnt ?</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Fundamentals</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className='ml-2'>
                                            <li>- What is internet ?</li>
                                            <li>- World Wide Web</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger>HTML</AccordionTrigger>
                                    <AccordionContent>
                                        Coming soon...
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>Git & GitHub</AccordionTrigger>
                                    <AccordionContent>
                                        Coming Soon...
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5">
                                    <AccordionTrigger>CSS</AccordionTrigger>
                                    <AccordionContent>
                                        Coming soon...
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-6">
                                    <AccordionTrigger>Javascript</AccordionTrigger>
                                    <AccordionContent>
                                        Coming soon...
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-7">
                                    <AccordionTrigger>Bootstrap</AccordionTrigger>
                                    <AccordionContent>
                                        Coming soon...
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-8">
                                    <AccordionTrigger>Tailwind CSS</AccordionTrigger>
                                    <AccordionContent>
                                        Coming soon...
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-9">
                                    <AccordionTrigger>React.js</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className='ml-2'>
                                            <li>- What is React.js</li>
                                            <li>- Why React.js</li>
                                            <li>- Installation & Folder Structure</li>
                                            <li>- Components (Functional & Class)</li>
                                            <li>- Props</li>
                                            <li>- What is Hooks ?</li>
                                            <li>- useState</li>
                                            <li>- useEffect</li>
                                            <li>- useRef</li>
                                            <li>- useMemo</li>
                                            <li>- useCallback</li>
                                            <li>- useContext</li>
                                            <li>- useReducer</li>
                                            <li>- Custom Hooks</li>
                                            <li>- Conditionals</li>
                                            <li>- Events</li>
                                            <li>- CSS Styling</li>
                                            <li>- Forms</li>
                                            <li>- React Router</li>

                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>


                                <AccordionItem value="item-10">
                                    <AccordionTrigger>Typescript</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className='ml-2'>
                                            <li>- What is Typescript & Why ?</li>
                                            <li>- Installation & Hello World</li>
                                            <li>- Types</li>
                                            <li>- Arrays</li>
                                            <li>- Tuples</li>
                                            <li>- Object Types</li>
                                            <li>- Enums</li>
                                            <li>- Aliases & Interface</li>
                                            <li>- Union Types</li>
                                            <li>- Functions</li>
                                            <li>- Casting</li>
                                            <li>- Classes</li>
                                            <li>- Classes</li>
                                            <li>- Generics</li>

                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-11">
                                    <AccordionTrigger>Next.js</AccordionTrigger>
                                    <AccordionContent>
                                        Coming soon...
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-12">
                                    <AccordionTrigger>Nodejs</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className='ml-2'>
                                            <li>- What is Node js</li>
                                            <li>- Installation & Hello World</li>
                                            <li>- Modules</li>
                                            <li>- File Handling</li>
                                            <li>- Internal Working on Node js</li>
                                            <li>- Build HTTP server</li>
                                            <li>- Handling URLs</li>
                                            <li>- HTTP methods</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-13">
                                    <AccordionTrigger>Expressjs</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className='ml-2'>
                                            <li>- What is Express js</li>
                                            <li>- First App</li>
                                            <li>- What is REST APIs</li>
                                            <li>- Postman & Thunder Client</li>
                                            <li>- Intro to Routing</li>
                                            <li>- Router</li>
                                            <li>- Route Parameters</li>
                                            <li>- String Queuery</li>
                                            <li>- Controllers</li>
                                            <li>- Views</li>
                                            <li>- EJS</li>
                                            <li>- Middlewares</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-14">
                                    <AccordionTrigger>Database (MongoDB)</AccordionTrigger>
                                    <AccordionContent>
                                        Coming soon...
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-15">
                                    <AccordionTrigger>Security & Authentication</AccordionTrigger>
                                    <AccordionContent>
                                        Coming soon...
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-16">
                                    <AccordionTrigger>API Development & Testing</AccordionTrigger>
                                    <AccordionContent>
                                        Coming soon...
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-17">
                                    <AccordionTrigger>WebSocket & WebRTC</AccordionTrigger>
                                    <AccordionContent>
                                        Coming soon...
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-18">
                                    <AccordionTrigger>Deployment & DevOps</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className='ml-2'>
                                            <li>- Basics Of Linux</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-19">
                                    <AccordionTrigger>Projects</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className='ml-2'>
                                            <li>- BabuBhaiya (Clone of CodeBhaiya)</li>
                                            <li>- HeapOver Flow (Clone of StackOver Flow)</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                            </Accordion>
                        </div>

                    </div>
                </div>
            </div> */}
            {/* Frequently Asked Qestions  */}

            {/* <div className='w-full pb-10 dark:bg-dark bg-white'>
                <div className='flex items-center justify-center gap-4 py-10'>
                    <AnimatedShinyText className="text-2xl md:text-4xl uppercase font-semibold inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 ">
                        <span>Frequently asked questions</span>
                    </AnimatedShinyText>
                </div>
                <div className="container">
                    <div className='container bg-slate-100 dark:bg-black/[0.7]'>

                        <div className='w-full flex flex-col items-center justify-center gap-4'>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>I don&apos;t know anything about Coding, is this batch good for me?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, this course will cover all important concepts from basic till advanced. So, there is no need to know anything about coding beforehand.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Do I need to be a Computer Science student to take up this batch?</AccordionTrigger>
                                    <AccordionContent>
                                        Anyone, from any background or field of study, can take up this batch and prepare for their placements & internships.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger>How will I ask my doubts?</AccordionTrigger>
                                    <AccordionContent>
                                        There will be a dedicated team of TAs in your Matrix community that will resolve your individual doubts.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger>What is the batch duration?</AccordionTrigger>
                                    <AccordionContent>
                                        The batch duration is almost 6 months but the access will be given for min. 2 years from the date of enrolment.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5">
                                    <AccordionTrigger>Is the batch in Hindi or English?</AccordionTrigger>
                                    <AccordionContent>
                                        The batch is taught in Hinglish (a mix of Hindi & English).
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-6">
                                    <AccordionTrigger>How long is the batch access?</AccordionTrigger>
                                    <AccordionContent>
                                        The batch is accessible for the duration of 2 years.<br />
                                        For consistency a deadline is important and i.e. why we don&apos;t believe in lifetime access as it may lead to procrastination and prolonged unemployment.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-7">
                                    <AccordionTrigger>I just completed 12th and I want to start preparing for my internship/job as a Software Developer, can I take it?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, you are eligible to enrol as we will cover everything from basics to advanced. It is always better to start as early as possible. It will give you a good head start and ample time to practice.
                                    </AccordionContent>
                                </AccordionItem>

                            </Accordion>
                        </div>

                    </div>
                </div>
            </div> */}
        </>
    )
}

export default GitHub



import ProgressBar from "@ramonak/react-progress-bar";
import AnimationWrapper, { Heading } from "..";

import java from '../../../public/images/icons/java.png'
import css from '../../../public/images/icons/css3.png'
import html from '../../../public/images/icons/html.png'
import kotlin from '../../../public/images/icons/kotlin.png'

import dj from '../../../public/images/icons/djngo.png'
import dart from '../../../public/images/icons/dart.png'
import git from '../../../public/images/icons/git.png'
import github from '../../../public/images/icons/github.png'
import next from '../../../public/images/icons/next.png'
import mysql from '../../../public/images/icons/mysql.png'
import react from '../../../public/images/icons/react.png'
import reactn from '../../../public/images/icons/react (1).png'
import ts from '../../../public/images/icons/typescript.png'
import Image from "next/image";
import py from '../../../public/images/icons/python.png'
import eth from '../../../public/images/icons/eth.png'
import ex from '../../../public/images/icons/express.png'
import cp from '../../../public/images/icons/cp.png'
import flutter from '../../../public/images/icons/pngwing.com (6).png'
import js from '../../../public/images/icons/js.png'
import php from '../../../public/images/icons/php.png'
import flask from '../../../public/images/icons/flask.png'
import solidity from '../../../public/images/icons/solidity.png'
import hh from '../../../public/images/icons/hardhat.png'

import xd from '../../../public/images/icons/adobe-xd.png'
import postman from '../../../public/images/icons/postman.png'
import nodejs from '../../../public/images/icons/node-js.png'
import firebase from '../../../public/images/icons/firebase.png'
import tf from '../../../public/images/icons/tensor-flow.png'
import redux from '../../../public/images/icons/redux.png'
import android from '../../../public/images/icons/android.png'
import arduino from '../../../public/images/icons/arduino.png'
import bs from '../../../public/images/icons/bootstrap.png'




const stacks = [
  {
    id:1,
    name: 'HTML',
    level: '95%',
    delay:0.2,
  },
  {
    id:2,
    name: 'Python',
    level: '85%',
    delay:0.3,
  },
  {
    id:3,
    name: 'CSS',
    level: '90%',
    delay:0.4,
  },
  {
    id:4,
    name: 'Java',
    level: '80%',
    delay:0.5,
  },
  {
    id:5,
    name: 'Javascript',
    level: '90%',
    delay:0.6,
  },
]

export default function TechStack() {
  

  return (
    <div id="stack" className="m-4 p-4 bg-white w-full mx-auto  dark:bg-black">
      <h2 className="text-left font-header text-2xl font-semibold uppercase text-primary sm:text-2xl lg:text-3xl my-3">
        My Stack
      </h2>
      <p className="mx-4">
        {/* eslint-disable-next-line react/no-unescaped-entities*/}
        Started with HTML and CSS now i'm in the field of full stack development web and mobile within the process to learning Machine Learning,Neural networks and Blockchain associated development with smart contracts.
      </p>
      <div className="m-4 p-2 w-full md:w-3/4 gap-y-2  mx-auto  flex flex-col items-center justify-start">
        {
          stacks.map(stack => {
            return (
              <AnimationWrapper
                
                from={{
                  scale: 0,
                  opactiy:0
                }}
                to={{
                  scale: 1,
                  opactiy:1
                }}
                transition={{
                  duration: 0.4,
                  delay: stack.delay,
                  dounce:true
                }}
                
                key={stack.id}>
                <div className="w-full  p-3 my-2 rounded-lg border dark:border-gray-700">
                <p className="py-2">{stack.name}</p>
                <ProgressBar
                  className='w-full'
                  
                  completed={parseInt(stack.level.split('%')[0])}
                  bgColor="#2b66c5"
                  baseBgColor="#d2daf4"
                  labelColor="#f0efef"
                  margin="2"
                  padding="5"
                  transitionDuration="10"
                  transitionTimingFunction="linear"
                  animateOnRender
                  maxCompleted={100}
                  customLabel={stack.level}
                />
              </div>
              </AnimationWrapper>
            )
          })
        }
        
      </div>

      <div>
        <h2 className="font-semibold text-2xl">Additionals</h2>
        <div className="gap-3 justify-center flex-wrap m-4 p-2 w-full flex mx-auto items-center md:justify-start border rounded-lg dark:border-gray-600">
          <Image src={html} width={50} height={50} alt="html"/>
          <Image src={js} width={50} height={50} alt="js"/>
          <Image src={php} width={50} height={50} alt="js"/>
          <Image src={java} width={50} height={50} alt="java"/>
          <Image src={py} width={50} height={50} alt="python"/>
          <Image src={dart} width={50} height={50} alt="dart"/>
          <Image src={flutter} width={50} height={50} alt="fl"/>
          <Image src={ts} width={50} height={50} alt="ts"/>
          <Image src={kotlin} width={50} height={50} alt="kotlin"/>
          <Image src={css} width={50} height={50} alt="css"/>
          <Image src={react} width={50} height={50} alt="react"/>
          <Image src={reactn} width={50} height={50} alt="reactn"/>
          <Image src={git} width={50} height={50} alt="git"/>
          <Image src={cp} width={50} height={50} alt="cp"/>
          <Image src={ex} className="dark:bg-gray-200 dark:rounded-full" width={50} height={50} alt="ex"/>
          <Image src={dj} width={50} height={50} alt="dj"/>
          <Image src={github} className="dark:bg-gray-200 dark:rounded-full" width={50} height={50} alt="gith"/>
          <Image src={flask} className="dark:bg-gray-200 dark:rounded-full" width={50} height={50} alt="flask"/>
          <Image src={mysql} width={50} height={50} alt="mysql"/>
          
          <Image src={next} className="dark:bg-gray-200 dark:rounded-full dark:px-2" width={50} height={50} alt="next"/>
          <Image src={eth} className="dark:bg-blue-300 dark:rounded-full" width={50} height={50} alt="eth"/>
          <Image src={solidity} className="dark:bg-gray-200 dark:rounded-full" width={50} height={50} alt="sol"/>
          <Image src={hh} width={50} height={50} alt="hh" />
          <Image src={xd} width={50} height={50} alt="hh"/>
          <Image src={postman} width={50} height={50} alt="hh"/>
          <Image src={nodejs} width={50} height={50} alt="hh"/>
          <Image src={firebase} width={50} height={50} alt="hh"/>
          <Image src={redux} width={50} height={50} alt="hh"/>
          <Image src={android} width={50} height={50} alt="hh"/>
          <Image src={arduino} width={50} height={50} alt="hh"/>
          <Image src={bs} width={50} height={50} alt="hh"/>
          <Image src={tf} width={50} height={50} alt="hh"/>
          
          
        </div>
      </div>
    </div>
  )
}

import React from 'react';
import {Route, Link} from 'react-router-dom';

const topics = [
  {
    name: 'React Router',
    id: 'react-router',
    description: 'Declarative, component based routing for React',
    resources: [
      {
        name: 'URL Parameters',
        id: 'url-parameters',
        description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it."      },
      {
        name: 'Programatically navigate',
        id: 'programmatically-navigate',
        description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router."
      }
    ]
  },
  {
    name: 'React.js',
    id: 'reactjs',
    description: 'A JavaScript library for building user interfaces',
    resources: [
      {
        name: 'React Lifecycle Events',
        id: 'react-lifecycle',
        description: "React Lifecycle events allow you to tie into specific phases of a components lifecycle"
      },
      {
        name: 'React AHA Moments',
        id: 'react-aha',
        description: "A collection of 'Aha' moments while learning React."
      }
    ]
  },
  {
    name: 'Functional Programming',
    id: 'functional-programming',
    description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
    resources: [
      {
        name: 'Imperative vs Declarative programming',
        id: 'imperative-declarative',
        description: 'A guide to understanding the difference between Imperative and Declarative programming.'
      },
      {
        name: 'Building User Interfaces with Pure Functions and Function Composition',
        id: 'fn-composition',
        description: 'A guide to building UI with pure functions and function composition in React'
      }
    ]
  }
]

function Resources({match}){
  const topicId = match.params.topicId;
  const resourceId = match.params.resourceId;
  const topic = topics.find(({ id }) => id === topicId).resources.find(({ id }) => id === resourceId)

  // console.log(match);
  // console.log(topicId);
  // console.log(resourceId);
  // console.log(topic);

  return (
    <div>
      <hr/>
      <h3>Resources</h3>
      <div>
        <p>{topic.name}</p>
        <p>{topic.description}</p>
      </div>
    </div>
  )
}

function Topic({match}){
  const topicId = match.params.topicId;
  const topic = topics.find(({ id }) => id === topicId);
  
  // console.log(match);
  // console.log(topicId);
  // console.log(topic);

  return (
    <div> 
      <hr/>
      <h2>Topic</h2>
      <div>
        <p> {topic.name} </p>
        <p> {topic.description} </p>
        <ul>
          {topic.resources.map((resource) => (
            <li key={resource.id}>
              <Link to={`/topics/${topicId}/${resource.id}`}>{resource.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Route path={`/topics/:topicId/:resourceId`} component={Resources} />
    </div>
  )
}

function Topics ({match}) {
  // console.log(match);

  return (
    <div> 
      <div className="container jumbotron"> 
        <h1>Topics</h1>
        <ul>
          {topics.map((topic) => (
            <li key={topic.id}>
              <Link to={`/topics/${topic.id}`}>{topic.name}</Link>
            </li>
          ))}
        </ul>
        <Route path={`/topics/:topicId`} component={Topic}/>
      </div>
    </div>
  )
}

export default Topics;
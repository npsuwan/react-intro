import React from 'react'
import ReactDOM from 'react-dom'

const SearchForm = () =>{
    return (
        <form>
            <input type="text"/>
            <button type="submit">search</button>
        </form>
    )
}
const Header = (props) => (
    <header>
        <h1>{props.title}</h1>
        <SearchForm/>
    </header>
)

const Items = (props) => {
    console.log(props.items)
    return (
        <ul>
        {props.items.map(item => (
            <li>{item}</li>
        ))}
        </ul>
    )
}
const Content = (props) => (
    <section>
        <p>{props.content}</p>
        <Items items={props.items}/>
    </section>
)

const AppWithoutDescription = () =>(
    <Header title="No descript here"/>
)
const App = () => {
    const title = 'Frontects: React123'
    const content = 'This is a simple react application'
    const items = [
        "Oliver",
        "Tobey",
        "Charlie",
        "Lucky"
    ]
    return (
        <section>
            <Header title={title} />
            <Content 
                content={content} 
                items = {items}/>
        </section>
    )
}

const element = document.getElementById('app')
ReactDOM.render(<App />,element)
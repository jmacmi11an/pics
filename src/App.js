import SearchBar from "./components/SearchBar";


function App() {
    const handleSubmit = (term) => {
        console.log('do a saerch', term);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
        </div>
    )
}

export default App;
function AboutApp({onBack}){
    return (
        <div>
            <h1>About app</h1>
            <button onClick={onBack} data-action="goBack">Back</button>
        </div>
    )
}

export default AboutApp;
export const Package = ({name, ammount, selectClicked}) => {
    return (
    <>
        <div style={{backgroundColor: 'black' ,width: '300px', opacity: '0.5', padding: '1%', textAlign: 'center', borderRadius: '5%', margin: '1%'}}>
            <h4>{name}</h4>
            <h2>{ammount}$</h2>
            <ul style={{textAlign: 'left'}}>
                <li>feature 1</li>
                <li>feature 2</li>
                <li>feature 3</li>
            </ul>
            <button style={{fontSize: '20px'}} onClick={selectClicked}>Select</button>
        </div>
    </>
    )
}

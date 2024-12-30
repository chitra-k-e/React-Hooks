function List(){
    return(
        <>
            <ol style={{listStyleType:"decimal"}}>
                <li>Fruits</li>
                <ul style={{listStyleType:"circle"}}>
                    <li>apple</li>
                    <li>mango</li>
                    <li>banana</li>
                </ul>
                <li>Vegetables</li>
                <ol style={{listStyleType:"lower-roman"}}>
                    <li>carrot</li>
                    <li>mango</li>
                    <li>banana</li>
                </ol>
                <li>Birds</li>
                <ul style={{listStyleType:"square"}}>
                    <li>peacock</li>
                    <li>parrot</li>
                    <li>crow</li>
                </ul>
            </ol>
        </>
    )
}
export default List
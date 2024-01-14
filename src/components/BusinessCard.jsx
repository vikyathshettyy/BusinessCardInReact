
export function BusinessCard({name,description,socialmedia,interests}) {
   
    
    return <div style={{padding:20,width:400,border:'1px solid black' }}>
        <h2>{name}</h2>
        
        {description}
        <h3>Interests</h3>
        {interests.map(interest=><div>{interest}</div>)}
        <br/>
        <a  href={socialmedia.linkedin}><button style={{margin:10,background:'blue', color:'white'}}>Linkedin</button></a>
        <a href={socialmedia.twitter}><button style={{background:'blue', color:'white'}}>Twitter</button></a>

    </div>



}
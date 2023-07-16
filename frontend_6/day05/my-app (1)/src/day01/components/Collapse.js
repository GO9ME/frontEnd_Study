import React , {useState} from 'react'
import './Collapse.css'

const Collapse = () => {
    const [toggle, setToggle ]=useState(false);
    // toggle = false; 
    //function eventHandle(){}
    const eventHandle = ()=>{
        console.log('click', toggle);
        // setToggle(!toggle);
        setToggle(toggle=>!toggle)
    }

  return (
    <>
        <dl>
            <dt  onClick={ eventHandle }
                 
            >title</dt>
            <dd
                className={ toggle ? "active" : ""}
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste praesentium incidunt delectus quis molestiae cum, illo, inventore possimus, tempore repudiandae id dignissimos ab consequuntur veniam nihil autem enim perspiciatis accusantium.</dd>
        </dl>
    </>
  )
}

export default Collapse
/*
import React , {useState} from 'react'
import './Collapse.css'

const Collepse = () => {
    const {toggle, setToggle} = useState(false);
    //toggle = false;
    //function eventHandle(){}
    const eventHandle = ()=>{
        console.log('click', toggle)
        // setToggle(!toggle);
        // setToggle(toggle=>!toggle);
        setToggle(toggle=!toggle);

    }
  return (
    <>
     <dl>
        <dt onClick={eventHandle}
        >title</dt>
        <dd
            className={toggle ? "active" : ""}
        > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nisi delectus voluptate, ullam corporis commodi minima quis tenetur iure voluptates a distinctio hic? Ea, earum saepe veritatis dolore impedit placeat.</dd>
    </dl>
    </>
  )
}

export default Collepse
*/
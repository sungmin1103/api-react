import { useContext } from "react";
import "./GyeongnamTourcultureList.css";
import { stateContext } from "../App";
import GyongnamTourcultureItem from "./GyongnamTourcultureItem";


const GyongnamTourcultureList=()=>{
    const rows = useContext(stateContext);
    return(
        <>
        <div id="map" className="map_area"></div>
        {
            rows.map( (item, index)=>(
                <GyongnamTourcultureItem key={index} {...item} />
            ))
        }
        </>
    );
};

export default GyongnamTourcultureList;
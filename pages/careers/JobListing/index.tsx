import Accordion from "../../../components/Accordian";


const JobListing = () => {
    return(
        <>
        <div className="section-wrapper">
            <Accordion title="Product Manager" content="this is content 1" time="3 days Ago" />
            <Accordion title="Sale Manager" content="this is content 2" time="5 days Ago"/>
        </div>
        </>
    )
}
export default JobListing;
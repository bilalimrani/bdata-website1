import CookieContainer from "./Cookie.style";


const Cookie = () => {
    return(
        <CookieContainer>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <div className="custom-flex-end">
                <button className="btn-secondary">More Information</button>
                <button className="btn-primary ms-3">Yes I Accept</button>
            </div>
        </CookieContainer>
    )
}
export default Cookie;
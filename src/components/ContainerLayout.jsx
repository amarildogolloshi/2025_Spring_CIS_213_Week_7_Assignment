import Header from "./Header";
import Logo from "./Logo";
import Main from "./Main";
import Navigation from "./Navigation";

const ContainerLayout = ({children}) => {
    return(
        <div className="container">
            <Header>
                <Logo />
                <Navigation />    
            </Header>
            <Main>
                {children}
            </Main>
        </div>
    )
}

export default ContainerLayout;
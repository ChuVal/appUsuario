// Define all possible screens/scenes that a user can visit in our app
import React from 'react';
import { Scene, Router, Lightbox} from 'react-native-router-flux';
import LandingPage from './pages/LandingPage';
import ChoicesPage from './pages/ChoicesPage';
import Exhibitions from './pages/Exhibitions';
import GeneralInfo from './pages/GeneralInfo';
import Programs from './pages/Programs';
import Tour from './pages/Tour';
import LearnMore from './pages/LearnMore';

const RouterComponent = () => {
    return (
        <Router
            titleStyle={{
                color: '#fff'
            }}
            navBarButtonColor='#fff'
        >
            <Lightbox>
                <Scene key="root" hideNavBar>
                    <Scene key="homepage" component={LandingPage} />
                    <Scene key="choices" component={ChoicesPage} />
                    <Scene key="tours" component={Exhibitions} hideNavBar={false} title={'Exhibicion'} 
                            navigationBarStyle={{ backgroundColor: '#B33D3B' }} 
                            backTitle=" "/>
                    <Scene key="generalInfo" component={GeneralInfo} hideNavBar={false} title={'Informacion General'} 
                            navigationBarStyle={{ backgroundColor: '#dfc12a' }} 
                            backTitle=" " />
                    <Scene key="programs" component={Programs} hideNavBar={false} title={'Siguientes Programas'} 
                            navigationBarStyle={{ backgroundColor: '#3B7FB3' }} 
                            backTitle=" " />
                    <Scene key="tour" component={Tour} hideNavBar={false} title={'CAFAM Tour'} 
                            navigationBarStyle={{ backgroundColor: '#F4A93F' }}/>
                    <Scene key="learnMore" component={LearnMore} hideNavBar={false} title={'Connect with the Artist'}
                            navigationBarStyle={{ backgroundColor: '#F4A93F' }}
                            backTitle=" " />
                </Scene>
            </Lightbox>
        </Router>
    );
};

export default RouterComponent;

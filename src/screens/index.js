import ConfNumber from './Conf/ConfNumber';
import ConfCode from './Conf/ConfCode';
import ConfMap from './Conf/ConfMap';
import ConfWho from './Conf/ConfWho';
import RegRefugee from './Reg/RegRefugee';
import RegRefugeeCont from './Reg/RegRefugeeCont'
import MapScreen from './MapScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { nullLiteral } from '@babel/types';
import RegRefugeeFamily from './Reg/RegRefugeeFamily';
import CustomDrawer from '../components/CustomDrawer';
import UserProfile from './Profile/UserProfile';
import SearchMarker from './MarkerSearch';
import MarkerPage from './Marker/MarkerPage';

/*
const Routes = createAppContainer(
    createStackNavigator({
        ConfirmationNumber: {
            screen: ConfNumber,
            navigationOptions: {
                title: 'ConfirmationNumber',
                header: null
            },
        },
        ConfirmationCode: {
            screen: ConfCode,
            navigationOptions: {
                title: 'ConfirmationCode',
                header: null 
            },
        },
        ConfirmationMap: {
            screen: ConfMap,
            navigationOptions: {
                title: 'ConfirmationMap',
                header: null
            }
        },
        ConfirmationWho: {
            screen: ConfWho,
            navigationOptions: {
                title: "ConfirmationWho",
                header: null
            }
        },
        RegistrationRefugee: {
            screen: RegRefugee,
            navigationOptions: {
                title: "RegistrationRefugee",
                header: null
            }
        },
        RegistrationRefugeeContinue: {
            screen: RegRefugeeCont,
            navigationOptions: {
                title: "RegistrationRefugeeContinue",
                header: null
            }
        },
        RegistrationRefugeeFamily: {
            screen: RegRefugeeFamily,
            navigationOptions: {
                title: "RegistrationRefugeeFamily",
                header: null
            }
        }
    })*/

    const Drawer = createDrawerNavigator({
        MapScreen: {
            screen: MapScreen,
            navigationOptions: {
                title: 'MapScreen',
            },
        },
        UserProfile: {
            screen: UserProfile,
            navigationOptions: {
                title: 'UserProfile',
            },
        },
        SearchMarker: {
            screen: SearchMarker,
            navigationOptions: {
                title: 'SearchMaker'
            },
        },
        MarkerPage: {
            screen: MarkerPage,
            navigationOptions: {
                title: 'MarkerPage'
            }
        },
    },{
        initialRouteName: 'MapScreen',
        contentComponent: CustomDrawer,
        contentOptions: {
            activeTintColor: '#000000',
            activeBackgroundColor: '#e6e6e6',
        }
    });

    const Stack = createStackNavigator({
        ConfirmationNumber: {
            screen: ConfNumber,
            navigationOptions: {
                title: 'ConfirmationNumber',
                header: null
            },
        },
        ConfirmationCode: {
            screen: ConfCode,
            navigationOptions: {
                title: 'ConfirmationCode',
                header: null 
            },
        },
        ConfirmationMap: {
            screen: ConfMap,
            navigationOptions: {
                title: 'ConfirmationMap',
                header: null
            }
        },
        ConfirmationWho: {
            screen: ConfWho,
            navigationOptions: {
                title: "ConfirmationWho",
                header: null
            }
        },
        RegistrationRefugee: {
            screen: RegRefugee,
            navigationOptions: {
                title: "RegistrationRefugee",
                header: null
            }
        },
        RegistrationRefugeeContinue: {
            screen: RegRefugeeCont,
            navigationOptions: {
                title: "RegistrationRefugeeContinue",
                header: null
            }
        },
        RegistrationRefugeeFamily: {
            screen: RegRefugeeFamily,
            navigationOptions: {
                title: "RegistrationRefugeeFamily",
                header: null
            }
        }
    });

    const Switch = createSwitchNavigator({Stack, Drawer});

    const Routes = createAppContainer(Switch);

export default Routes;

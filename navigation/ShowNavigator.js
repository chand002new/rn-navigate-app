import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryDetailsScreen from '../screens/CategoryDetailsScreen';
import ShowDetailScreen from '../screens/ShowDetailScreen';

const ShowNavigator = createStackNavigator({
    Categories : CategoriesScreen,
    CategoryDetails: CategoryDetailsScreen,
    ShowDetail: ShowDetailScreen
});
export default createAppContainer(ShowNavigator);

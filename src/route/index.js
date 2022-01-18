import Home from '../components/home'
import Customer from '../components/Customer/customer'
import CustomerDetail from '../components/Customer/customerDetail'
import CustomerStart from '../components/Customer/customerStart'
import CustomerEdit from '../components/Customer/customerEdit'
export const routes=[
    {
        path:'',
        component:Home
    },
    {
        path:'/customer',
        component:Customer,
        children:[
            {
                path:'',
                component:CustomerStart
            },
            {
                path:':id',
                component:CustomerDetail
            },
            {
                path:':id/edit',
                component:CustomerEdit,
                name:'customerEdit'
            }
        ]
    }
]
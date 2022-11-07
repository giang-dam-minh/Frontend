const routes = [
    {
        path: "category/product",
        name: "product",
        component: () => import("@/components/Product/Product.vue")
    }
]

export default routes;

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductContext = void 0;
var react_1 = require("react");
var ClienteService_1 = require("../services/ClienteService");
exports.ProductContext = react_1.createContext();
var ProductContextProvider = function (props) {
    var productService = new ClienteService_1.ProductService();
    var _a = react_1.useState([]), products = _a[0], setProducts = _a[1];
    var _b = react_1.useState(null), editProduct = _b[0], setEditProduct = _b[1];
    react_1.useEffect(function () {
        productService.readAll().then(function (data) { return setProducts(data); });
    }, []);
    var createProduct = function (product) {
        productService
            .create(product)
            .then(function (data) { return setProducts(__spreadArrays(products, [data])); });
    };
    var deleteProduct = function (id) {
        productService
            .delete(id)
            .then(function () { return setProducts(products.filter(function (p) { return p._id !== id; })); });
    };
    var findProduct = function (id) {
        var product = products.find(function (p) { return p._id === id; });
        setEditProduct(product);
    };
    var updateProduct = function (product) {
        productService
            .update(product)
            .then(function (data) {
            return setProducts(products.map(function (p) { return (p._id === product._id ? data : product); }));
        });
        setEditProduct(null);
    };
    return (react_1.default.createElement(exports.ProductContext.Provider, { value: {
            createProduct: createProduct,
            deleteProduct: deleteProduct,
            findProduct: findProduct,
            updateProduct: updateProduct,
            editProduct: editProduct,
            products: products,
        } }, props.children));
};
exports.default = ProductContextProvider;
//# sourceMappingURL=ClienteContext.js.map
/**
 * Created by crosp on 5/8/17.
 */
const express = require('express'),
    router = express.Router();
const ROUTE_V1_PATH = APP_ROUTE_PATH + "v1/";
router.use('/auth', require(ROUTE_V1_PATH + 'auth'));
router.use('/users', require(ROUTE_V1_PATH + 'user'));
router.use('/posts', require(ROUTE_V1_PATH + 'post'));


const checkExist = "This is a check exist case"
module.exports = router;

const endpoint="New end point";
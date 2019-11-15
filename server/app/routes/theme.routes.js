let express = require('express');
let router = express.Router();

let themes = require('../controllers/theme.controller.js');

// Create a new Customer
router.post('/api/changevariables', themes.changeVariables); // 已验证,已启用
router.get('/api/getvariables', themes.getVariables); // 已验证,已启用
router.get('/api/getpresetthemes', themes.getPresetThemes); // 已验证,已启用
router.get('/api/getthemeextend', themes.getThemeExtend); // 已验证,已启用
router.get('/api/downloadtheme/:themefolder', themes.downloadTheme);
router.post('/api/selectTheme', themes.selectTheme); // 已验证,已启用
router.get('/api/test', themes.testFunc);

module.exports = router;

export const mockdata = [
    {
        "id": "6a967bdb-2a8e-41f9-afe6-1c918b3d75ad",
        "labelCode": "6a967bdb-2a8e-41f9-afe6-1c918b3d75ad",
        "code": "search",
        "name": "搜索",
        "control": {
            "controltype": "search",
            "placeholder": "请输入编号或名称",
            "showLabel": false
        }
    },
    {
        "id": "6a967bdb-2a8e-41f9-afe6-1c918b3d75aa",
        "labelCode": "6a967bdb-2a8e-41f9-afe6-1c918b3d75aa",
        "code": "checkboxGroup",
        "name": "复选组",
        "control": {
            "controltype": "checkboxgroup",
            "enumValues": [
                {"value": "aa", "name": "标签一一一"},
                {"value": "bb", "name": "标签二"},
                {"value": "cc", "name": "标签三测试"},
                {"value": "dd", "name": "标签四测试测试测试"}
            ],
            "isExtend": true,
            // "required":true
            "showLabel": false
        }
    },

    {
        "id": "6a967bdb-2a8e-41f9-afe6-1c918b3d75af",
        "labelCode": "6a967bdb-2a8e-41f9-afe6-1c918b3d75af",
        "code": "dropdown",
        "name": "下拉选择",
        "control": {
            "controltype": "dropdown",
            "valueType": "1",
            "enumValues": [
                {"value": "Billing", "name": "制单"},
                {"value": "SubmitApproval", "name": "提交审批"},
                {"value": "Approved", "name": "审批通过"},
                {"value": "ApprovalNotPassed", "name": "审批不通过"}
            ],
            "isExtend": true,
            "showLabel": false
        }
    },
    {
        "id": "6a967bdb-2a8e-41f9-afe6-1c918b3d75ae",
        "labelCode": "6a967bdb-2a8e-41f9-afe6-1c918b3d75ae",
        "code": "singledate",
        "name": "日期",
        "control": {
            "controltype": "singleDate",
            "placeholder": "请选择日期",
            "isExtend": true
        }
    },
    {
        "id": "6a967bdb-2a8e-41f9-afe6-1c918b3d755",
        "labelCode": "6a967bdb-2a8e-41f9-afe6-1c918b3d755",
        "code": "text",
        "name": "text",
        "control": {
            "controltype": "text",
            "placeholder": "请输入",
            "isExtend": true,
            "showLabel": false
        }
    }
]
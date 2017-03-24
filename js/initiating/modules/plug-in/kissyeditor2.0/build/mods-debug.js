/*generated by KMD*/
KISSY.config('modules',{
    "kg/editor-plugins/1.1.2/back-color": {
        "requires": [
            "./color/btn",
            "./back-color/cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/bold": {
        "requires": [
            "./font/ui",
            "./bold/cmd",
            "node",
            "./button"
        ]
    },
    "kg/editor-plugins/1.1.2/bubble": {
        "requires": [
            "util",
            "ua",
            "overlay",
            "editor"
        ]
    },
    "kg/editor-plugins/1.1.2/button": {
        "requires": [
            "util",
            "editor",
            "button"
        ]
    },
    "kg/editor-plugins/1.1.2/checkbox-source-area": {
        "requires": [
            "editor",
            "util",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/code": {
        "requires": [
            "editor",
            "./button",
            "./dialog-loader"
        ]
    },
    "kg/editor-plugins/1.1.2/contextmenu": {
        "requires": [
            "editor",
            "menu",
            "./focus-fix",
            "event/dom",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/dent-cmd": {
        "requires": [
            "editor",
            "./list-utils",
            "dom",
            "node",
            "ua"
        ]
    },
    "kg/editor-plugins/1.1.2/dialog-loader": {
        "requires": [
            "editor",
            "overlay",
            "dom",
            "ua"
        ]
    },
    "kg/editor-plugins/1.1.2/dialog": {
        "requires": [
            "editor",
            "overlay",
            "./focus-fix",
            "dd/plugin/constrain",
            "component/plugin/drag",
            "dom"
        ]
    },
    "kg/editor-plugins/1.1.2/draft": {
        "requires": [
            "editor",
            "json",
            "event/dom",
            "./local-storage",
            "overlay",
            "./menubutton",
            "util",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/drag-upload": {
        "requires": [
            "util",
            "editor",
            "event/dom",
            "node",
            "dom"
        ]
    },
    "kg/editor-plugins/1.1.2/element-path": {
        "requires": [
            "editor",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/fake-objects": {
        "requires": [
            "editor",
            "html-parser",
            "util",
            "node",
            "dom"
        ]
    },
    "kg/editor-plugins/1.1.2/flash-bridge": {
        "requires": [
            "logger-manager",
            "util",
            "editor",
            "swf",
            "event/custom"
        ]
    },
    "kg/editor-plugins/1.1.2/flash": {
        "requires": [
            "editor",
            "./flash-common/base-class",
            "./flash-common/utils",
            "./fake-objects",
            "./button"
        ]
    },
    "kg/editor-plugins/1.1.2/focus-fix": {
        "requires": [
            "editor",
            "ua"
        ]
    },
    "kg/editor-plugins/1.1.2/font-family": {
        "requires": [
            "util",
            "editor",
            "./font/ui",
            "./font-family/cmd",
            "./menubutton"
        ]
    },
    "kg/editor-plugins/1.1.2/font-size": {
        "requires": [
            "editor",
            "./font/ui",
            "./font-size/cmd",
            "./menubutton",
            "util"
        ]
    },
    "kg/editor-plugins/1.1.2/fore-color": {
        "requires": [
            "./color/btn",
            "./fore-color/cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/heading": {
        "requires": [
            "./menubutton",
            "editor",
            "./heading/cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/image": {
        "requires": [
            "./button",
            "editor",
            "./bubble",
            "./contextmenu",
            "./dialog-loader",
            "util",
            "ua",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/indent": {
        "requires": [
            "editor",
            "./indent/cmd",
            "./button"
        ]
    },
    "kg/editor-plugins/1.1.2/italic": {
        "requires": [
            "./font/ui",
            "./italic/cmd",
            "./button",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/justify-center": {
        "requires": [
            "editor",
            "./justify-center/cmd",
            "./button",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/justify-cmd": {
        "requires": [
            "editor"
        ]
    },
    "kg/editor-plugins/1.1.2/justify-left": {
        "requires": [
            "editor",
            "./justify-left/cmd",
            "./button",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/justify-right": {
        "requires": [
            "editor",
            "./justify-right/cmd",
            "./button",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/link": {
        "requires": [
            "./button",
            "./bubble",
            "util",
            "editor",
            "./link/utils",
            "./dialog-loader",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/list-utils": {
        "requires": [
            "node",
            "dom",
            "ua"
        ]
    },
    "kg/editor-plugins/1.1.2/local-storage": {
        "requires": [
            "editor",
            "overlay",
            "./flash-bridge",
            "util",
            "ua"
        ]
    },
    "kg/editor-plugins/1.1.2/maximize": {
        "requires": [
            "./maximize/cmd",
            "./button"
        ]
    },
    "kg/editor-plugins/1.1.2/menubutton": {
        "requires": [
            "editor",
            "util",
            "menubutton"
        ]
    },
    "kg/editor-plugins/1.1.2/ordered-list": {
        "requires": [
            "./list-utils/btn",
            "./ordered-list/cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/outdent": {
        "requires": [
            "editor",
            "./button",
            "./outdent/cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/overlay": {
        "requires": [
            "editor",
            "overlay",
            "./focus-fix"
        ]
    },
    "kg/editor-plugins/1.1.2/page-break": {
        "requires": [
            "editor",
            "./fake-objects",
            "./button",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/preview": {
        "requires": [
            "./button",
            "util"
        ]
    },
    "kg/editor-plugins/1.1.2/progressbar": {
        "requires": [
            "base",
            "util",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/remove-format": {
        "requires": [
            "editor",
            "./button",
            "./remove-format/cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/resize": {
        "requires": [
            "dd",
            "node",
            "util"
        ]
    },
    "kg/editor-plugins/1.1.2/separator": {
        "requires": [
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/smiley": {
        "requires": [
            "editor",
            "./overlay",
            "./button",
            "node",
            "util"
        ]
    },
    "kg/editor-plugins/1.1.2/source-area": {
        "requires": [
            "editor",
            "./button"
        ]
    },
    "kg/editor-plugins/1.1.2/strike-through": {
        "requires": [
            "./font/ui",
            "./strike-through/cmd",
            "./button"
        ]
    },
    "kg/editor-plugins/1.1.2/table": {
        "requires": [
            "editor",
            "./dialog-loader",
            "./contextmenu",
            "./button",
            "util",
            "ua",
            "dom",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/underline": {
        "requires": [
            "./font/ui",
            "./underline/cmd",
            "./button",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/undo": {
        "requires": [
            "editor",
            "./undo/btn",
            "./undo/cmd",
            "./button"
        ]
    },
    "kg/editor-plugins/1.1.2/unordered-list": {
        "requires": [
            "./list-utils/btn",
            "./unordered-list/cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/video": {
        "requires": [
            "editor",
            "./flash-common/utils",
            "./flash-common/base-class",
            "./fake-objects",
            "./button"
        ]
    },
    "kg/editor-plugins/1.1.2/word-filter": {
        "requires": [
            "html-parser",
            "util",
            "node",
            "ua"
        ]
    },
    "kg/editor-plugins/1.1.2/xiami-music": {
        "requires": [
            "editor",
            "./flash-common/base-class",
            "./flash-common/utils",
            "./fake-objects",
            "./button",
            "util"
        ]
    },
    "kg/editor-plugins/1.1.2/back-color/cmd": {
        "requires": [
            "../color/cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/bold/cmd": {
        "requires": [
            "editor",
            "../font/cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/code/dialog": {
        "requires": [
            "util",
            "editor",
            "menubutton",
            "dom",
            "../dialog",
            "node",
            "ua"
        ]
    },
    "kg/editor-plugins/1.1.2/color/btn": {
        "requires": [
            "editor",
            "../button",
            "../overlay",
            "../dialog-loader",
            "node",
            "util"
        ]
    },
    "kg/editor-plugins/1.1.2/color/cmd": {
        "requires": [
            "editor"
        ]
    },
    "kg/editor-plugins/1.1.2/color/dialog": {
        "requires": [
            "editor",
            "util",
            "../dialog",
            "dom",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/flash/dialog": {
        "requires": [
            "util",
            "editor",
            "../flash-common/utils",
            "../dialog",
            "../menubutton"
        ]
    },
    "kg/editor-plugins/1.1.2/flash-common/base-class": {
        "requires": [
            "./utils",
            "base",
            "editor",
            "node",
            "ua",
            "util",
            "../dialog-loader",
            "../bubble",
            "../contextmenu"
        ]
    },
    "kg/editor-plugins/1.1.2/flash-common/utils": {
        "requires": [
            "swf",
            "dom",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/font/cmd": {
        "requires": [
            "editor"
        ]
    },
    "kg/editor-plugins/1.1.2/font/ui": {
        "requires": [
            "editor",
            "../button",
            "../menubutton"
        ]
    },
    "kg/editor-plugins/1.1.2/font-family/cmd": {
        "requires": [
            "../font/cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/font-size/cmd": {
        "requires": [
            "../font/cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/fore-color/cmd": {
        "requires": [
            "../color/cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/heading/cmd": {
        "requires": [
            "editor"
        ]
    },
    "kg/editor-plugins/1.1.2/image/dialog": {
        "requires": [
            "util",
            "editor",
            "io",
            "../dialog",
            "tabs",
            "../menubutton",
            "./dialog-tpl",
            "ua",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/indent/cmd": {
        "requires": [
            "../dent-cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/italic/cmd": {
        "requires": [
            "editor",
            "../font/cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/justify-center/cmd": {
        "requires": [
            "../justify-cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/justify-left/cmd": {
        "requires": [
            "../justify-cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/justify-right/cmd": {
        "requires": [
            "../justify-cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/link/dialog": {
        "requires": [
            "util",
            "editor",
            "../dialog",
            "./utils"
        ]
    },
    "kg/editor-plugins/1.1.2/link/utils": {
        "requires": [
            "editor",
            "node"
        ]
    },
    "kg/editor-plugins/1.1.2/list-utils/btn": {
        "requires": [
            "editor",
            "../button",
            "../menubutton"
        ]
    },
    "kg/editor-plugins/1.1.2/list-utils/cmd": {
        "requires": [
            "editor",
            "../list-utils",
            "ua",
            "node",
            "dom"
        ]
    },
    "kg/editor-plugins/1.1.2/maximize/cmd": {
        "requires": [
            "editor",
            "event/dom",
            "util",
            "ua",
            "node",
            "dom"
        ]
    },
    "kg/editor-plugins/1.1.2/ordered-list/cmd": {
        "requires": [
            "editor",
            "../list-utils/cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/outdent/cmd": {
        "requires": [
            "editor",
            "../dent-cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/remove-format/cmd": {
        "requires": [
            "editor",
            "dom"
        ]
    },
    "kg/editor-plugins/1.1.2/strike-through/cmd": {
        "requires": [
            "editor",
            "../font/cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/table/dialog": {
        "requires": [
            "util",
            "editor",
            "../dialog",
            "../menubutton",
            "ua",
            "node",
            "dom"
        ]
    },
    "kg/editor-plugins/1.1.2/underline/cmd": {
        "requires": [
            "editor",
            "../font/cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/undo/btn": {
        "requires": [
            "../button",
            "editor"
        ]
    },
    "kg/editor-plugins/1.1.2/undo/cmd": {
        "requires": [
            "editor",
            "ua",
            "util"
        ]
    },
    "kg/editor-plugins/1.1.2/unordered-list/cmd": {
        "requires": [
            "editor",
            "../list-utils/cmd"
        ]
    },
    "kg/editor-plugins/1.1.2/video/dialog": {
        "requires": [
            "util",
            "editor",
            "io",
            "../flash/dialog",
            "../menubutton"
        ]
    },
    "kg/editor-plugins/1.1.2/xiami-music/dialog": {
        "requires": [
            "util",
            "editor",
            "../flash/dialog",
            "../menubutton",
            "dom",
            "node"
        ]
    }
});
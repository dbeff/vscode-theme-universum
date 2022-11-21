import tinycolor from "tinycolor2";
import prettier from "prettier";

export namespace Theme {
  export interface Settings {
    ui: {
      border: string;
      editorBackground: string;
      panelBackground: string;
      accent: string;
    };
    syntax: {
      keywords: string;
      storage: string;
      variables: string;
      string: string;
      attributes: string;
      tags: string;
    };
    common: {
      foreground: string;
      green: string;
      red: string;
      yellow: string;
      blue: string;
      purple: string;
    };
  }

  export function prettify(object: unknown) {
    return prettier.format(JSON.stringify(object, undefined, 2), {
      parser: "json",
    });
  }

  export function getSchema(settings: Theme.Settings): unknown {
    return {
      $schema: "vscode://schemas/color-theme",
      name: "Universum",
      type: "dark",
      colors: {
        foreground: settings.common.foreground,
        "selection.background": tinycolor(settings.common.foreground)
          .setAlpha(0.8)
          .toHexString(),
        descriptionForeground: `${settings.common.foreground}60`,
        focusBorder: "#ffffff00",
        errorForeground: `${settings.common.foreground}60`,
        "widget.shadow": "#00000070",
        "scrollbar.shadow": "#00000033",
        "icon.foreground": tinycolor(settings.common.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "window.activeBorder": "#181A27",
        "window.inactiveBorder": "#ffffff00",
        "sash.hoverBorder": "#29355a",

        "settings.headerForeground": settings.common.foreground,
        "settings.modifiedItemIndicator": `${settings.ui.accent}`,

        "badge.background": "#7e83b230",
        "badge.foreground": settings.common.foreground,

        "toolbar.activeBackground": "#202330",
        "toolbar.hoverBackground": "#202330",

        "extensionButton.prominentBackground": `${settings.ui.accent}DD`,
        "extensionButton.prominentHoverBackground": `${settings.ui.accent}AA`,
        "extensionButton.prominentForeground": "#ffffff",
        "extensionBadge.remoteBackground": `${settings.ui.accent}`,
        "extensionBadge.remoteForeground": "#ffffff",
        "extensionIcon.starForeground": "#E5C07B",

        "button.background": `${settings.ui.accent}`,
        "button.hoverBackground": `${settings.ui.accent}BB`,
        "button.secondaryBackground": `${settings.ui.accent}`,
        "button.foreground": "#ffffffCC",
        "progressBar.background": `${settings.ui.accent}`,

        "input.background": "#00000030",
        "input.foreground": settings.common.foreground,
        "input.border": "#00000050",
        "input.placeholderForeground": "#7886998A",
        "inputOption.activeForeground": settings.common.foreground,
        "inputOption.activeBackground": "#0A92AE44",

        "inputValidation.infoForeground": "#000000",
        "inputValidation.infoBackground": "#0da0ba",
        "inputValidation.infoBorder": "#0db9d7",
        "inputValidation.warningForeground": "#000000",
        "inputValidation.warningBackground": "#c2985b",
        "inputValidation.warningBorder": "#e0af68",
        "inputValidation.errorForeground": settings.common.foreground,
        "inputValidation.errorBackground": "#EA5D7650",
        "inputValidation.errorBorder": "#EA5D7690",

        "dropdown.foreground": `${settings.common.foreground}90`,
        "dropdown.background": "#00000030",
        "dropdown.listBackground": "#14141b",

        "activityBar.background": settings.ui.panelBackground,
        "activityBar.foreground": settings.common.foreground,
        "activityBar.inactiveForeground": `${settings.common.foreground}60`,
        "activityBar.border": settings.ui.border,
        "activityBarBadge.background": `${settings.ui.accent}`,
        "activityBarBadge.foreground": "#ffffffAA",

        "tree.indentGuidesStroke": `${settings.common.foreground}30`,
        "sideBar.foreground": tinycolor(settings.common.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "sideBar.background": settings.ui.panelBackground,
        "sideBar.border": settings.ui.border,
        "sideBarTitle.foreground": tinycolor(settings.common.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "sideBarSectionHeader.background": settings.ui.panelBackground,
        "sideBarSectionHeader.foreground": settings.common.foreground,
        "sideBarSectionHeader.border": settings.ui.border,
        "sideBar.dropBackground": `${settings.ui.accent}40`,

        "list.dropBackground": `${settings.ui.accent}40`,
        "list.deemphasizedForeground": `${settings.common.foreground}80`,
        "list.activeSelectionBackground": `${settings.ui.accent}30`,
        "list.activeSelectionForeground": settings.common.foreground,
        "list.inactiveSelectionBackground": `${settings.ui.accent}20`,
        "list.inactiveSelectionForeground": settings.common.foreground,
        "list.focusBackground": `${settings.ui.accent}40`,
        "list.focusForeground": settings.common.foreground,
        "list.hoverBackground": `${settings.ui.accent}30`,
        "list.hoverForeground": settings.common.foreground,

        "list.highlightForeground": "#5C8FC1",
        "list.invalidItemForeground": "#a38ecb",
        "list.errorForeground": "#EA5D76DD",
        "list.warningForeground": "#E5C07BDD",

        "listFilterWidget.background": settings.ui.border,
        "listFilterWidget.outline": "#0A92AE",
        "listFilterWidget.noMatchesOutline": "#EA5D76",

        "pickerGroup.foreground": settings.common.foreground,
        "pickerGroup.border": settings.ui.border,

        "scrollbarSlider.background": "#868bc415",
        "scrollbarSlider.hoverBackground": "#868bc410",
        "scrollbarSlider.activeBackground": "#868bc422",

        "editorBracketHighlight.foreground1": "#0A92AECC",
        "editorBracketHighlight.foreground2": "#DDAE55CC",
        "editorBracketHighlight.foreground3": "#0A92AECC",
        "editorBracketHighlight.foreground4": "#DDAE55CC",
        "editorBracketHighlight.foreground5": "#0A92AECC",
        "editorBracketHighlight.foreground6": "#DDAE55CC",

        "editorBracketHighlight.unexpectedBracket.foreground": "#EA5D76",

        "editorBracketPairGuide.activeBackground1": "#0A92AE",
        "editorBracketPairGuide.activeBackground2": "#DDAE55",
        "editorBracketPairGuide.activeBackground3": "#0A92AE",
        "editorBracketPairGuide.activeBackground4": "#DDAE55",
        "editorBracketPairGuide.activeBackground5": "#0A92AE",
        "editorBracketPairGuide.activeBackground6": "#DDAE55",

        "editor.background": settings.ui.editorBackground,
        "editor.foreground": settings.common.foreground,
        "editor.foldBackground": "#11111750",
        "editorLink.activeForeground": "#F2DEBB",

        "editor.selectionBackground": "#ffffff10",
        "editor.inactiveSelectionBackground": "#515c7e25",

        "editor.findMatchBackground": "#e0af6820",
        "editor.findMatchBorder": "#F2DEBB",
        "editor.findMatchHighlightBackground": "#e0af6820",

        "editor.findRangeHighlightBackground": "#515c7e",
        "editor.rangeHighlightBackground": "#e0af6820",
        "editor.wordHighlightBackground": "#515c7e44",
        "editor.wordHighlightStrongBackground": "#515c7e55",
        "editor.selectionHighlightBackground": "#515c7e44",

        "editorCursor.foreground": settings.common.foreground,
        "editorIndentGuide.background": `${settings.common.foreground}10`,
        "editorIndentGuide.activeBackground": `${settings.common.foreground}30`,
        "editorLineNumber.foreground": `${settings.common.foreground}40`,
        "editorLineNumber.activeForeground": `${settings.common.foreground}BB`,
        "editor.lineHighlightBackground": `${settings.common.foreground}10`,
        "editorWhitespace.foreground": "#363b54",

        "editorMarkerNavigation.background": settings.ui.panelBackground,
        "editorHoverWidget.background": settings.ui.panelBackground,
        "editorHoverWidget.border": settings.ui.border,

        "editorBracketMatch.background": settings.ui.panelBackground,
        "editorBracketMatch.border": "#3ed6f494", //"",

        "editorOverviewRuler.border": settings.ui.border,
        "editorOverviewRuler.errorForeground": "#EA5D76CC",
        "editorOverviewRuler.warningForeground": "#E5C07BCC",
        "editorOverviewRuler.infoForeground": "#0DB5D7CC",
        "editorOverviewRuler.bracketMatchForeground": settings.ui.border,
        "editorOverviewRuler.findMatchForeground": `${settings.common.foreground}44`,
        "editorOverviewRuler.rangeHighlightForeground": `${settings.common.foreground}44`,
        "editorOverviewRuler.selectionHighlightForeground": `${settings.common.foreground}22`,
        "editorOverviewRuler.wordHighlightForeground": "#bb9af755",
        "editorOverviewRuler.wordHighlightStrongForeground": "#bb9af766",
        "editorOverviewRuler.modifiedForeground": "#394b70",
        "editorOverviewRuler.addedForeground": "#98C37960",
        "editorOverviewRuler.deletedForeground": "#EA5D7060",

        "editorRuler.foreground": settings.ui.border,
        "editorError.foreground": "#EA5D76",
        "editorWarning.foreground": "#e0af68",
        "editorInfo.foreground": "#0da0ba",
        "editorHint.foreground": "#0da0ba",

        "editorInlayHint.background": "#383955c6",
        "editorInlayHint.foreground": "#ffffff80",
        "editorInlayHint.typeForeground": "#d3c8b6",
        "editorInlayHint.parameterForeground": "#84cedc",

        "editorGutter.modifiedBackground": "#0DB5D7AA",
        "editorGutter.addedBackground": "#98C379AA",
        "editorGutter.deletedBackground": "#EA5D76AA",

        "editorGhostText.foreground": "#647a9c",

        "minimapGutter.modifiedBackground": "#0DB5D7AA",
        "minimapGutter.addedBackground": "#98C379AA",
        "minimapGutter.deletedBackground": "#EA5D76AA",

        "editorGroup.border": settings.ui.border,
        "editorGroup.dropBackground": `${settings.ui.accent}40`,
        "editorGroup.emptyBackground": settings.ui.editorBackground,
        "editorGroupHeader.tabsBorder": settings.ui.border,
        "editorGroupHeader.tabsBackground": settings.ui.panelBackground,
        "editorGroupHeader.noTabsBackground": settings.ui.panelBackground,
        "editorGroupHeader.border": settings.ui.border,

        "editorPane.background": settings.ui.panelBackground,

        "editorWidget.background": settings.ui.panelBackground,
        "editorWidget.resizeBorder": settings.common.foreground,

        "editorSuggestWidget.background": settings.ui.panelBackground,
        "editorSuggestWidget.border": settings.ui.border,
        "editorSuggestWidget.selectedBackground": "#20222c",
        "editorSuggestWidget.highlightForeground": "#6183bb",

        "editorCodeLens.foreground": "#485570",
        "editorLightBulb.foreground": "#DDAE55",
        "editorLightBulbAutoFix.foreground": "#DDAE55",

        "peekView.border": settings.ui.border,
        "peekViewEditor.background": "#151723",
        "peekViewEditor.matchHighlightBackground": `${settings.common.foreground}30`,
        "peekViewTitle.background": "#12141f",
        "peekViewTitleLabel.foreground": settings.common.foreground,
        "peekViewTitleDescription.foreground": tinycolor(
          settings.common.foreground
        )
          .setAlpha(0.5)
          .toHex8String(),
        "peekViewResult.background": "#12141f",
        "peekViewResult.selectionForeground": settings.common.foreground,
        "peekViewResult.selectionBackground": "#0f111a",
        "peekViewResult.lineForeground": settings.common.foreground,
        "peekViewResult.fileForeground": tinycolor(settings.common.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "peekViewResult.matchHighlightBackground": `${settings.common.foreground}30`,

        "diffEditor.insertedTextBackground": "#41a6b520",
        "diffEditor.removedTextBackground": "#EA5D7620",
        "diffEditor.insertedLineBackground": "#41a6b520",
        "diffEditor.removedLineBackground": "#EA5D7620",
        "diffEditorGutter.insertedLineBackground": "#41a6b525",
        "diffEditorGutter.removedLineBackground": "#EA5D7620",
        "diffEditorOverview.insertedForeground": "#41a6b525",
        "diffEditorOverview.removedForeground": "#EA5D7620",
        "diffEditor.diagonalFill": "#292e42",

        "breadcrumb.background": settings.ui.panelBackground,
        "breadcrumbPicker.background": settings.ui.panelBackground,
        "breadcrumb.foreground": `${settings.common.foreground}70`,
        "breadcrumb.focusForeground": settings.common.foreground,
        "breadcrumb.activeSelectionForeground": settings.common.foreground,

        "tab.activeBackground": settings.ui.panelBackground,
        "tab.inactiveBackground": settings.ui.panelBackground,
        "tab.activeForeground": settings.common.foreground,
        "tab.hoverForeground": settings.common.foreground,
        "tab.activeBorderTop": tinycolor(settings.ui.accent)
          .lighten(10)
          .toHexString(),
        "tab.inactiveForeground": tinycolor(settings.common.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "tab.border": settings.ui.border,
        "tab.unfocusedActiveForeground": settings.common.foreground,
        "tab.unfocusedInactiveForeground": tinycolor(settings.common.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "tab.unfocusedHoverForeground": settings.common.foreground,
        "tab.activeModifiedBorder": "#1a1b26",
        "tab.inactiveModifiedBorder": settings.ui.border,
        "tab.unfocusedActiveBorder": settings.ui.border,
        "tab.lastPinnedBorder": "#222333",

        "panel.background": settings.ui.panelBackground,
        "panel.border": settings.ui.border,
        "panelTitle.activeForeground": tinycolor(settings.common.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "panelTitle.inactiveForeground": "#42465d",
        "panelTitle.activeBorder": settings.ui.panelBackground,
        "panelInput.border": settings.ui.border,
        "panelSectionHeader.background": "#00000030",
        "panelSectionHeader.border": settings.ui.border,

        "statusBar.foreground": tinycolor(settings.common.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "statusBar.background": settings.ui.panelBackground,
        "statusBar.border": settings.ui.border,
        "statusBar.noFolderBackground": settings.ui.panelBackground,
        "statusBar.debuggingBackground": "#E5C07B",
        "statusBar.debuggingBorder": "#E5C07B",
        "statusBar.debuggingForeground": "#00000098",

        "statusBarItem.activeBackground": "#00000020",
        "statusBarItem.hoverBackground": "#ffffff10",
        "statusBarItem.prominentBackground": "#00000030",
        "statusBarItem.prominentHoverBackground": "#00000030",

        "titleBar.activeForeground": tinycolor(settings.common.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "titleBar.inactiveForeground": tinycolor(settings.common.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "titleBar.activeBackground": settings.ui.panelBackground,
        "titleBar.inactiveBackground": settings.ui.panelBackground,
        "titleBar.border": settings.ui.border,

        "walkThrough.embeddedEditorBackground": settings.ui.panelBackground,

        "textLink.foreground": "#5C8FC1",
        "textLink.activeForeground": "#A4BFE0",
        "textPreformat.foreground": "#5C8FC1",
        "textBlockQuote.background": settings.ui.panelBackground,
        "textCodeBlock.background": settings.ui.panelBackground,
        "textSeparator.foreground": `${settings.common.foreground}60`,

        "debugExceptionWidget.border": "#EA5D76",
        "debugExceptionWidget.background": settings.ui.border,
        "debugToolBar.background": settings.ui.border,

        "debugConsole.infoForeground": tinycolor(settings.common.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "debugConsole.errorForeground": "#D1697F",
        "debugConsole.sourceForeground": tinycolor(settings.common.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "debugConsole.warningForeground": "#c49a5a",
        "debugConsoleInputIcon.foreground": "#73daca",

        "editor.stackFrameHighlightBackground": "#E2BD3A20",
        "editor.focusedStackFrameHighlightBackground": "#73daca20",
        "debugView.stateLabelForeground": tinycolor(settings.common.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "debugView.stateLabelBackground": "#14141b",
        "debugView.valueChangedHighlight": "#0A92AEaa",
        "debugTokenExpression.name": "#37B0D0",
        "debugTokenExpression.value": "#a38ecb",
        "debugTokenExpression.string": "#9CBC80",
        "debugTokenExpression.boolean": "#E5C07B",
        "debugTokenExpression.number": "#DDAE55",
        "debugTokenExpression.error": "#D1697F",

        "debugIcon.stopForeground": "#EA5D76",
        "debugIcon.restartForeground": "#98C379",
        "debugIcon.pauseForeground": "#0DB5D7",

        "debugIcon.breakpointForeground": "#EA5D76",
        "debugIcon.breakpointDisabledForeground": "#414761",
        "debugIcon.breakpointUnverifiedForeground": "#E53858",

        "terminal.background": settings.ui.panelBackground,
        "terminal.foreground": settings.common.foreground,
        "terminal.selectionBackground": `${settings.common.foreground}20`,

        "terminal.ansiBlack": "#363b54",
        "terminal.ansiRed": "#D1697F",
        "terminal.ansiGreen": "#9CBC80",
        "terminal.ansiYellow": "#D7BB85",
        "terminal.ansiBlue": "#6b8dd7",
        "terminal.ansiMagenta": "#9F92BB",
        "terminal.ansiCyan": "#37B0D0",
        "terminal.ansiWhite": tinycolor(settings.common.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "terminal.ansiBrightBlack": "#363b54",
        "terminal.ansiBrightRed": "#EF8195",
        "terminal.ansiBrightGreen": "#98C379",
        "terminal.ansiBrightYellow": "#e0af68",
        "terminal.ansiBrightBlue": "#7aa2f7",
        "terminal.ansiBrightMagenta": "#a38ecb",
        "terminal.ansiBrightCyan": "#0DB5D7",
        "terminal.ansiBrightWhite": settings.common.foreground,

        "gitDecoration.addedResourceForeground": "#98C379DD",
        "gitDecoration.untrackedResourceForeground": "#98C379DD",
        "gitDecoration.renamedResourceForeground": "#E5C07BDD",
        "gitDecoration.modifiedResourceForeground": "#E5C07BDD",
        "gitDecoration.stageModifiedResourceForeground": "#E5C07BDD",
        "gitDecoration.deletedResourceForeground": "#EA5D76DD",
        "gitDecoration.stageDeletedResourceForeground": "#EA5D76DD",
        "gitDecoration.conflictingResourceForeground": "#a38ecbDD",
        "gitDecoration.ignoredResourceForeground": `${settings.common.foreground}60`,

        "notebook.editorBackground": "#1a1b26",
        "notebook.cellEditorBackground": settings.ui.panelBackground,
        "notebook.cellBorderColor": settings.ui.border,
        "notebook.focusedCellBorder": "#29355a",
        "notebook.cellStatusBarItemHoverBackground": "#1c1d29",

        "charts.red": "#EF8195",
        "charts.blue": "#37B0D0",
        "charts.yellow": "#E5C07B",
        "charts.orange": "#ff9e64",
        "charts.green": "#41a6b5",
        "charts.purple": "#a38ecb",
        "charts.foreground": settings.common.foreground,
        "charts.lines": settings.ui.panelBackground,

        "merge.currentHeaderBackground": "#41a6b525",
        "merge.currentContentBackground": "#007a7544",
        "merge.incomingHeaderBackground": "#0A92AEaa",
        "merge.incomingContentBackground": "#0A92AE44",
        "mergeEditor.change.background": "#41a6b525",
        "mergeEditor.change.word.background": "#41a6b540",
        "mergeEditor.conflict.unhandledUnfocused.border": "#e0af6888",
        "mergeEditor.conflict.unhandledFocused.border": "#e0af68b0",
        "mergeEditor.conflict.handledUnfocused.border": "#41a6b525",
        "mergeEditor.conflict.handledFocused.border": "#41a6b565",
        "mergeEditor.conflict.handled.minimapOverViewRuler": "#0DB5D7",
        "mergeEditor.conflict.unhandled.minimapOverViewRuler": "#E5C07B",

        "menubar.selectionForeground": settings.common.foreground,
        "menubar.selectionBackground": "#1e202e",
        "menubar.selectionBorder": "#1b1e2e",
        "menu.foreground": tinycolor(settings.common.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "menu.background": settings.ui.panelBackground,
        "menu.selectionForeground": settings.common.foreground,
        "menu.selectionBackground": "#1e202e",
        "menu.separatorBackground": settings.ui.border,
        "menu.border": settings.ui.border,

        "notificationCenterHeader.background": settings.ui.border,
        "notifications.background": "#181825",
        "notificationLink.foreground": "#5C8FC1",
        "notificationsErrorIcon.foreground": "#D1697F",
        "notificationsWarningIcon.foreground": "#D7BB85",
        "notificationsInfoIcon.foreground": "#D7BB85",

        "keybindingLabel.foreground": "#00000095",
        "keybindingLabel.background": settings.common.foreground,
        "keybindingLabel.border": settings.common.foreground,
        "keybindingLabel.bottomBorder": settings.common.foreground,
        "keybindingTable.headerBackground": settings.common.foreground,
        "keybindingTable.rowsBackground": settings.common.foreground,

        "symbolIcon.arrayForeground": settings.common.blue,
        "symbolIcon.booleanForeground": settings.common.blue,
        "symbolIcon.classForeground": settings.common.yellow,
        "symbolIcon.namespaceForeground": settings.common.purple,
        "symbolIcon.moduleForeground": settings.common.blue,
        "symbolIcon.colorForeground": settings.common.blue,
        "symbolIcon.constantForeground": settings.common.green,
        "symbolIcon.constructorForeground": settings.common.blue,
        "symbolIcon.enumeratorForeground": settings.common.blue,
        "symbolIcon.enumeratorMemberForeground": settings.common.blue,
        "symbolIcon.eventForeground": settings.common.blue,
        "symbolIcon.fieldForeground": settings.common.blue,
        "symbolIcon.fileForeground": settings.common.blue,
        "symbolIcon.folderForeground": settings.common.blue,
        "symbolIcon.functionForeground": settings.common.blue,
        "symbolIcon.interfaceForeground": settings.common.blue,
        "symbolIcon.keyForeground": settings.common.blue,
        "symbolIcon.keywordForeground": settings.common.blue,
        "symbolIcon.methodForeground": settings.common.blue,
        "symbolIcon.nullForeground": settings.common.red,
        "symbolIcon.numberForeground": settings.common.red,
        "symbolIcon.objectForeground": settings.common.blue,
        "symbolIcon.operatorForeground": settings.common.blue,
        "symbolIcon.packageForeground": settings.common.blue,
        "symbolIcon.propertyForeground": settings.common.yellow,
        "symbolIcon.referenceForeground": settings.common.blue,
        "symbolIcon.snippetForeground": settings.common.blue,
        "symbolIcon.stringForeground": settings.common.green,
        "symbolIcon.structForeground": settings.common.blue,
        "symbolIcon.textForeground": settings.common.green,
        "symbolIcon.typeParameterForeground": settings.common.blue,
        "symbolIcon.unitForeground": settings.common.blue,
        "symbolIcon.variableForeground": settings.common.blue,
      },
      tokenColors: [
        {
          name: "Invalid",
          scope: ["invalid"],
          settings: {
            foreground: settings.syntax.keywords,
          },
        },
        {
          name: "Comment",
          scope: ["comment", "punctuation.definition.comment"],
          settings: {
            fontStyle: "italic",
            foreground: `${settings.common.foreground}60`,
          },
        },
        {
          name: "Number, Constant",
          scope: ["constant.numeric", "constant.character", "constant.escape"],
          settings: {
            foreground: tinycolor(settings.syntax.keywords)
              .lighten(10)
              .toHexString(),
          },
        },
        {
          name: "String, Symbols",
          scope: ["string"],
          settings: {
            foreground: "#98C379",
          },
        },
        {
          name: "Punctuation",
          scope: ["punctuation", "meta.brace"],
          settings: {
            foreground: tinycolor(settings.syntax.storage)
              .setAlpha(0.8)
              .toHex8String(),
          },
        },
        {
          name: "Storage",
          scope: ["storage", "constant.language", "support.type.builtin"],
          settings: {
            foreground: settings.syntax.storage,
          },
        },
        {
          name: "Keyword",
          scope: ["keyword"],
          settings: {
            foreground: settings.syntax.keywords,
          },
        },

        {
          name: "Keyword Operator",
          scope: ["keyword.operator"],
          settings: {
            foreground: tinycolor(settings.syntax.keywords)
              .setAlpha(0.8)
              .toHex8String(),
          },
        },
        {
          name: "Decorator",
          scope: ["meta.decorator"],
          settings: {
            foreground: settings.syntax.keywords,
          },
        },
        {
          name: "Decorator",
          scope: ["punctuation.decorator"],
          settings: {
            foreground: tinycolor(settings.syntax.keywords)
              .lighten(10)
              .toHexString(),
          },
        },
        {
          name: "Object",
          scope: ["meta.object"],
          settings: {
            foreground: settings.common.foreground,
          },
        },
        {
          name: "Variables",
          scope: ["variable", "variable.other.enummember"],
          settings: {
            foreground: settings.common.foreground,
          },
        },
        {
          name: "Variables Other",
          scope: [
            "variable.other",
            "meta.parameters variable",
            "variable.parameter",
          ],
          settings: {
            foreground: "#dac6a2",
          },
        },
        {
          name: "Method",
          scope: [
            "meta.method",
            "meta.function",
            "meta.function-call",
            "support.function",
          ],
          settings: {
            foreground: "#dac6a2",
          },
        },
        {
          name: "Class, Entity, Alias, Namespace",
          scope: [
            "meta.class",
            "variable.other.object",
            "variable.other.readwrite.alias",
            "meta.attribute entity.name",
            "entity.name.package",
            "entity.name.function",
          ],
          settings: {
            foreground: settings.syntax.attributes,
          },
        },
        {
          name: "Type, Enum, Interface",
          scope: [
            "meta.type",
            "meta.interface",
            "meta.enum",
            "support.type",
            "entity.name.type",
          ],
          settings: {
            foreground: settings.syntax.attributes,
          },
        },
        {
          name: "Tag Name",
          scope: ["meta.tag entity.name.tag"],
          settings: {
            foreground: tinycolor(settings.syntax.tags)
              .brighten(10)
              .toHexString(),
          },
        },
        {
          name: "Tag Markup",
          scope: ["meta.tag punctuation.definition.tag"],
          settings: {
            foreground: `${settings.syntax.tags}BB`,
          },
        },
        {
          name: "Tag attributes",
          scope: ["meta.tag.attributes", "meta.attribute"],
          settings: {
            foreground: `${settings.syntax.tags}CC`,
          },
        },
        {
          name: "Tag expression",
          scope: ["meta.tag.attributes meta.embedded.expression"],
          settings: {
            foreground: settings.syntax.attributes,
          },
        },
        {
          name: "YML",
          scope: ["entity.name.tag.yaml"],
          settings: {
            foreground: settings.syntax.attributes,
          },
        },
        {
          name: "YML unquoted",
          scope: ["string.unquoted.plain.out.yaml", "source.yaml punctuation"],
          settings: {
            foreground: settings.common.foreground,
          },
        },
        {
          name: "JSON property",
          scope: ["support.type.property-name.json"],
          settings: {
            foreground: settings.syntax.attributes,
          },
        },
        {
          name: "CSS Classes",
          scope: ["entity.other.attribute-name.class"],
          settings: {
            foreground: settings.syntax.attributes,
          },
        },
        {
          name: "CSS Properties",
          scope: [
            "source.css support.type.property-name",
            "source.sass support.type.property-name",
            "source.scss support.type.property-name",
            "source.less support.type.property-name",
            "source.stylus support.type.property-name",
            "source.postcss support.type.property-name",
          ],
          settings: {
            foreground: tinycolor(settings.syntax.attributes)
              .lighten(20)
              .toHexString(),
          },
        },
        {
          name: "CSS ID",
          scope: ["meta.selector"],
          settings: {
            foreground: settings.syntax.attributes,
          },
        },
        {
          name: "CSS Value",
          scope: ["meta.property-value.css"],
          settings: {
            foreground: "#0db5d7",
          },
        },
        {
          name: "Inserted",
          scope: ["markup.inserted"],
          settings: {
            foreground: settings.syntax.string,
          },
        },
        {
          name: "Deleted",
          scope: ["markup.deleted"],
          settings: {
            foreground: "#FF5370",
          },
        },
        {
          name: "Changed",
          scope: ["markup.changed"],
          settings: {
            foreground: "#C792EA",
          },
        },
        {
          name: "Regular Expressions",
          scope: ["string.regexp"],
          settings: {
            foreground: "#89DDFF",
          },
        },
        {
          name: "Escape Characters",
          scope: ["constant.character.escape"],
          settings: {
            foreground: "#C792EA",
          },
        },
        {
          name: "URL",
          scope: ["*url*", "*link*", "*uri*"],
          settings: {
            fontStyle: "underline",
          },
        },

        {
          name: "Markdown - Plain",
          scope: [
            "text.html.markdown",
            "punctuation.definition.list_item.markdown",
          ],
          settings: {
            foreground: settings.common.foreground,
          },
        },
        {
          name: "Markdown heading",
          scope: ["markup.heading.markdown"],
          settings: {
            foreground: "#89DDFF",
          },
        },
        {
          name: "Markdown - Heading mark",
          scope: [
            "markup.heading | markup.heading entity.name",
            "markup.heading.markdown punctuation.definition.heading.markdown",
          ],
          settings: {
            foreground: "#0db5d7",
          },
        },
        {
          name: "Markdown - Markup Raw Inline",
          scope: ["text.html.markdown markup.inline.raw.markdown"],
          settings: {
            foreground: "#C792EA",
          },
        },
        {
          name: "Markdown - Markup Raw Inline Punctuation",
          scope: [
            "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
          ],
          settings: {
            foreground: "#65737E",
          },
        },

        {
          name: "Markup - Italic",
          scope: ["markup.italic"],
          settings: {
            fontStyle: "italic",
            foreground: "#FFCB6B",
          },
        },
        {
          name: "Markup - Bold",
          scope: ["markup.bold", "markup.bold string"],
          settings: {
            fontStyle: "bold",
            foreground: "#FFCB6B",
          },
        },
        {
          name: "Markup - Bold-Italic",
          scope: [
            "markup.bold markup.italic",
            "markup.italic markup.bold",
            "markup.quote markup.bold",
            "markup.bold markup.italic string",
            "markup.italic markup.bold string",
            "markup.quote markup.bold string",
          ],
          settings: {
            fontStyle: "bold",
            foreground: "#E0AF68",
          },
        },
        {
          name: "Markup - Underline",
          scope: ["markup.underline"],
          settings: {
            fontStyle: "underline",
            foreground: "#98C379",
          },
        },
        {
          name: "Markdown - Blockquote",
          scope: ["markup.quote punctuation.definition.blockquote.markdown"],
          settings: {
            foreground: "#65737E",
          },
        },
        {
          name: "Markup - Quote",
          scope: ["markup.quote"],
          settings: {
            fontStyle: "italic",
            foreground: `${settings.common.foreground}E5`,
          },
        },
        {
          name: "Markdown - Image",
          scope: [
            "meta.image.inline.markdown",
            "string.other.link.description.markdown",
          ],
          settings: {
            foreground: "#a7e9df",
          },
        },
        {
          name: "Markdown - Link",
          scope: ["string.other.link.title.markdown"],
          settings: {
            foreground: "#7DCFFF",
          },
        },
        {
          name: "Markdown - Link Description",
          scope: ["string.other.link.description.title.markdown"],
          settings: {
            foreground: "#7DCFFF",
          },
        },
        {
          name: "Markdown - Link Anchor",
          scope: ["constant.other.reference.link.markdown"],
          settings: {
            foreground: "#98C379",
          },
        },
        {
          name: "Markup - Raw Block",
          scope: ["markup.raw.block"],
          settings: {
            foreground: "#e792ea",
          },
        },
        {
          name: "Markdown - Raw Block Fenced",
          scope: ["markup.raw.block.fenced.markdown"],
          settings: {
            foreground: "#00000050",
          },
        },
        {
          name: "Markdown - Fenced Bode Block",
          scope: ["punctuation.definition.fenced.markdown"],
          settings: {
            foreground: "#00000050",
          },
        },
        {
          name: "Markdown - Fenced Bode Block Variable",
          scope: [
            "markup.raw.block.fenced.markdown",
            "variable.language.fenced.markdown",
            "punctuation.section.class.end",
          ],
          settings: {
            foreground: "#EEFFFF",
          },
        },
        {
          name: "Markdown - Fenced Language",
          scope: ["variable.language.fenced.markdown"],
          settings: {
            foreground: "#65737E",
          },
        },
        {
          name: "Markdown - Separator",
          scope: ["meta.separator"],
          settings: {
            fontStyle: "bold",
            foreground: "#65737E",
          },
        },
        {
          name: "Markup - Table",
          scope: ["markup.table"],
          settings: {
            foreground: settings.common.foreground,
          },
        },
      ],
      semanticTokenColors: {},
      semanticHighlighting: true,
    };
  }
}

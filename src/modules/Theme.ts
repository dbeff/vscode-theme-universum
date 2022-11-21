import tinycolor from "tinycolor2";
import prettier from "prettier";

export namespace Theme {
  export interface Syntax {
    keywords: string;
    storage: string;
    string: string;
    attributes: string;
    tags: string;
  }

  export interface Common {
    green: string;
    red: string;
    yellow: string;
    orange: string;
    blue: string;
    purple: string;
  }

  export interface Settings {
    ui: {
      editorBackground: string;
      panelBackground: string;
      foreground: string;
      border: string;
      accent: string;
    };
    syntax: Syntax;
    common: Common;
  }

  export const commonDefault = {
    red: "#EA5D76",
    blue: "#0DB5D7",
    yellow: "#E5C07B",
    orange: "#FFB185",
    green: "#98C379",
    purple: "#B09DD2",
  };

  export const syntaxDefault = {
    keywords: "#EA5D76",
    storage: "#0DB5D7",
    string: "#98C379",
    attributes: "#E5C07B",
    tags: "#00C5CC",
  };

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
        foreground: settings.ui.foreground,
        "selection.background": tinycolor(settings.ui.foreground)
          .setAlpha(0.8)
          .toHexString(),
        descriptionForeground: `${settings.ui.foreground}60`,
        focusBorder: "#ffffff00",
        errorForeground: `${settings.ui.foreground}60`,
        "widget.shadow": "#00000070",
        "scrollbar.shadow": "#00000033",
        "icon.foreground": tinycolor(settings.ui.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "window.activeBorder": settings.ui.border,
        "window.inactiveBorder": "#ffffff00",
        "sash.hoverBorder": settings.ui.accent,

        "settings.headerForeground": settings.ui.foreground,
        "settings.modifiedItemIndicator": `${settings.ui.accent}`,

        "badge.background": settings.ui.editorBackground,
        "badge.foreground": settings.ui.foreground,

        "toolbar.activeBackground": "#202330",
        "toolbar.hoverBackground": "#202330",

        "extensionButton.prominentBackground": `${settings.ui.accent}DD`,
        "extensionButton.prominentHoverBackground": `${settings.ui.accent}AA`,
        "extensionButton.prominentForeground": "#ffffff",
        "extensionBadge.remoteBackground": `${settings.ui.accent}`,
        "extensionBadge.remoteForeground": "#ffffff",
        "extensionIcon.starForeground": settings.common.yellow,

        "button.background": `${settings.ui.accent}`,
        "button.hoverBackground": `${settings.ui.accent}BB`,
        "button.secondaryBackground": `${settings.ui.accent}`,
        "button.foreground": "#ffffffCC",
        "progressBar.background": `${settings.ui.accent}`,

        "input.background": settings.ui.panelBackground,
        "input.foreground": settings.ui.foreground,
        "input.border": settings.ui.border,
        "input.placeholderForeground": `${settings.ui.foreground}80`,
        "inputOption.activeForeground": settings.ui.foreground,
        "inputOption.activeBackground": tinycolor(settings.ui.panelBackground)
          .lighten(10)
          .toHexString(),

        "inputValidation.infoForeground": settings.ui.foreground,
        "inputValidation.infoBackground": `${settings.common.blue}50`,
        "inputValidation.infoBorder": `${settings.common.blue}AA`,
        "inputValidation.warningForeground": settings.ui.foreground,
        "inputValidation.warningBackground": `${settings.common.yellow}50`,
        "inputValidation.warningBorder": `${settings.common.yellow}AA`,
        "inputValidation.errorForeground": settings.ui.foreground,
        "inputValidation.errorBackground": `${settings.common.red}50`,
        "inputValidation.errorBorder": `${settings.common.red}AA`,

        "dropdown.foreground": `${settings.ui.foreground}90`,
        "dropdown.background": "#00000030",
        "dropdown.listBackground": settings.ui.panelBackground,
        "dropdown.border": settings.ui.border,

        "activityBar.background": settings.ui.editorBackground,
        "activityBar.foreground": settings.ui.foreground,
        "activityBar.inactiveForeground": `${settings.ui.foreground}60`,
        "activityBar.border": settings.ui.border,
        "activityBarBadge.background": `${settings.ui.accent}`,
        "activityBarBadge.foreground": "#ffffffBB",

        "tree.indentGuidesStroke": tinycolor(settings.ui.panelBackground)
          .lighten(15)
          .toHexString(),
        "sideBar.foreground": `${settings.ui.foreground}80`,
        "sideBar.background": settings.ui.panelBackground,
        "sideBar.border": settings.ui.border,
        "sideBarTitle.foreground": `${settings.ui.foreground}80`,
        "sideBarSectionHeader.background": settings.ui.panelBackground,
        "sideBarSectionHeader.foreground": settings.ui.foreground,
        "sideBarSectionHeader.border": settings.ui.border,
        "sideBar.dropBackground": `${settings.ui.accent}40`,

        "list.dropBackground": `${settings.ui.accent}40`,
        "list.deemphasizedForeground": `${settings.ui.foreground}80`,
        "list.activeSelectionBackground": tinycolor(settings.ui.panelBackground)
          .lighten(10)
          .toHexString(),
        "list.activeSelectionForeground": settings.ui.foreground,
        "list.inactiveSelectionBackground": tinycolor(
          settings.ui.panelBackground
        )
          .lighten(5)
          .toHexString(),
        "list.inactiveSelectionForeground": `${settings.ui.foreground}AA`,
        "list.focusBackground": tinycolor(settings.ui.panelBackground)
          .lighten(10)
          .toHexString(),
        "list.focusForeground": settings.ui.foreground,
        "list.hoverBackground": tinycolor(settings.ui.panelBackground)
          .lighten(5)
          .toHexString(),
        "list.hoverForeground": settings.ui.foreground,

        "list.highlightForeground": settings.ui.foreground,
        "list.invalidItemForeground": `${settings.common.purple}DD`,
        "list.errorForeground": `${settings.common.red}DD`,
        "list.warningForeground": `${settings.common.yellow}DD`,

        "listFilterWidget.background": settings.ui.border,
        "listFilterWidget.outline": settings.common.blue,
        "listFilterWidget.noMatchesOutline": `${settings.common.red}`,

        "pickerGroup.foreground": settings.ui.foreground,
        "pickerGroup.border": settings.ui.border,

        "scrollbarSlider.background": `${settings.ui.foreground}15`,
        "scrollbarSlider.hoverBackground": `${settings.ui.foreground}25`,
        "scrollbarSlider.activeBackground": `${settings.ui.foreground}25`,

        "editorBracketHighlight.foreground1": `${settings.syntax.storage}CC`,
        "editorBracketHighlight.foreground2": `${settings.syntax.attributes}CC`,
        "editorBracketHighlight.foreground3": `${settings.syntax.storage}CC`,
        "editorBracketHighlight.foreground4": `${settings.syntax.attributes}CC`,
        "editorBracketHighlight.foreground5": `${settings.syntax.storage}CC`,
        "editorBracketHighlight.foreground6": `${settings.syntax.attributes}CC`,

        "editorBracketHighlight.unexpectedBracket.foreground": `${settings.common.red}`,

        "editorBracketPairGuide.activeBackground1": `${settings.syntax.storage}AA`,
        "editorBracketPairGuide.activeBackground2": `${settings.syntax.attributes}AA`,
        "editorBracketPairGuide.activeBackground3": `${settings.syntax.storage}AA`,
        "editorBracketPairGuide.activeBackground4": `${settings.syntax.attributes}AA`,
        "editorBracketPairGuide.activeBackground5": `${settings.syntax.storage}AA`,
        "editorBracketPairGuide.activeBackground6": `${settings.syntax.attributes}AA`,

        "editor.background": settings.ui.editorBackground,
        "editor.foreground": settings.ui.foreground,
        "editor.foldBackground": "#11111750",
        "editorLink.activeForeground": settings.ui.accent,

        "editor.selectionBackground": "#ffffff10",
        "editor.inactiveSelectionBackground": "#515c7e25",

        "editor.findMatchBackground": tinycolor(settings.common.yellow)
          .setAlpha(0.2)
          .toHex8String(),
        "editor.findMatchBorder": tinycolor(settings.common.yellow)
          .lighten(15)
          .toHexString(),
        "editor.findMatchHighlightBackground": tinycolor(settings.common.yellow)
          .setAlpha(0.2)
          .toHex8String(),

        "editor.findRangeHighlightBackground": tinycolor(
          settings.ui.editorBackground
        )
          .lighten(15)
          .toHexString(),
        "editor.rangeHighlightBackground": `${settings.common.yellow}20`,
        "editor.wordHighlightBackground": tinycolor(
          settings.ui.editorBackground
        )
          .lighten(10)
          .toHexString(),
        "editor.wordHighlightStrongBackground": tinycolor(
          settings.ui.editorBackground
        )
          .lighten(10)
          .toHexString(),
        "editor.selectionHighlightBackground": tinycolor(
          settings.ui.editorBackground
        )
          .lighten(10)
          .toHexString(),

        "editorCursor.foreground": settings.ui.foreground,
        "editorIndentGuide.background": tinycolor(settings.ui.editorBackground)
          .lighten(4)
          .toHexString(),
        "editorIndentGuide.activeBackground": tinycolor(
          settings.ui.editorBackground
        )
          .lighten(15)
          .toHexString(),
        "editorLineNumber.foreground": `${settings.ui.foreground}50`,
        "editorLineNumber.activeForeground": settings.ui.foreground,
        "editor.lineHighlightBackground": tinycolor(
          settings.ui.editorBackground
        )
          .lighten(5)
          .toHexString(),
        "editorWhitespace.foreground": tinycolor(settings.ui.editorBackground)
          .lighten(10)
          .toHexString(),

        "editorMarkerNavigation.background": settings.ui.panelBackground,
        "editorHoverWidget.background": settings.ui.panelBackground,
        "editorHoverWidget.border": settings.ui.border,

        "editorBracketMatch.background": settings.ui.panelBackground,
        "editorBracketMatch.border": `${settings.ui.foreground}AA`,

        "editorOverviewRuler.border": settings.ui.border,
        "editorOverviewRuler.errorForeground": `${settings.common.red}CC`,
        "editorOverviewRuler.warningForeground": `${settings.common.yellow}CC`,
        "editorOverviewRuler.infoForeground": `${settings.common.blue}CC`,
        "editorOverviewRuler.bracketMatchForeground": settings.ui.border,
        "editorOverviewRuler.findMatchForeground": `${settings.ui.foreground}44`,
        "editorOverviewRuler.rangeHighlightForeground": `${settings.ui.foreground}44`,
        "editorOverviewRuler.selectionHighlightForeground": `${settings.ui.foreground}22`,
        "editorOverviewRuler.wordHighlightForeground": `${settings.common.green}50`,
        "editorOverviewRuler.wordHighlightStrongForeground": `${settings.common.purple}60`,
        "editorOverviewRuler.modifiedForeground": `${settings.common.blue}60`,
        "editorOverviewRuler.addedForeground": `${settings.common.green}60`,
        "editorOverviewRuler.deletedForeground": `${settings.common.red}60`,

        "editorRuler.foreground": settings.ui.border,
        "editorError.foreground": settings.common.red,
        "editorWarning.foreground": settings.common.yellow,
        "editorInfo.foreground": settings.common.blue,
        "editorHint.foreground": settings.common.blue,

        "editorInlayHint.background": tinycolor(settings.ui.editorBackground)
          .lighten(10)
          .toHexString(),
        "editorInlayHint.foreground": tinycolor(settings.ui.editorBackground)
          .lighten(10)
          .toHexString(),
        "editorInlayHint.typeForeground": tinycolor(
          settings.ui.editorBackground
        )
          .lighten(60)
          .toHexString(),
        "editorInlayHint.parameterForeground": tinycolor(
          settings.ui.editorBackground
        )
          .lighten(60)
          .toHexString(),

        "editorGutter.modifiedBackground": `${settings.common.blue}AA`,
        "editorGutter.addedBackground": `${settings.common.green}AA`,
        "editorGutter.deletedBackground": `${settings.common.red}AA`,

        "editorGhostText.foreground": `${settings.ui.foreground}AA`,

        "minimapGutter.modifiedBackground": `${settings.common.blue}AA`,
        "minimapGutter.addedBackground": `${settings.common.green}AA`,
        "minimapGutter.deletedBackground": `${settings.common.red}AA`,

        "editorGroup.border": settings.ui.border,
        "editorGroup.dropBackground": `${settings.ui.accent}40`,
        "editorGroup.emptyBackground": settings.ui.editorBackground,
        "editorGroupHeader.tabsBorder": settings.ui.border,
        "editorGroupHeader.tabsBackground": settings.ui.panelBackground,
        "editorGroupHeader.noTabsBackground": settings.ui.panelBackground,
        "editorGroupHeader.border": settings.ui.border,

        "editorPane.background": settings.ui.panelBackground,

        "editorWidget.background": settings.ui.panelBackground,
        "editorWidget.resizeBorder": settings.ui.accent,

        "editorSuggestWidget.background": settings.ui.panelBackground,
        "editorSuggestWidget.border": settings.ui.border,
        "editorSuggestWidget.selectedBackground": tinycolor(
          settings.ui.panelBackground
        )
          .lighten(10)
          .toHexString(),
        "editorSuggestWidget.highlightForeground": settings.ui.accent,

        "editorCodeLens.foreground": `${settings.ui.foreground}AA`,
        "editorLightBulb.foreground": settings.common.yellow,
        "editorLightBulbAutoFix.foreground": tinycolor(settings.common.yellow)
          .darken(10)
          .toHexString(),

        "peekView.border": settings.ui.border,
        "peekViewEditor.background": settings.ui.panelBackground,
        "peekViewEditor.matchHighlightBackground": `${settings.ui.foreground}30`,
        "peekViewTitle.background": settings.ui.panelBackground,
        "peekViewTitleLabel.foreground": settings.ui.foreground,
        "peekViewTitleDescription.foreground": tinycolor(settings.ui.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "peekViewResult.background": settings.ui.panelBackground,
        "peekViewResult.selectionForeground": settings.ui.foreground,
        "peekViewResult.selectionBackground": tinycolor(
          settings.ui.panelBackground
        )
          .lighten(10)
          .toHexString(),
        "peekViewResult.lineForeground": settings.ui.foreground,
        "peekViewResult.fileForeground": tinycolor(settings.ui.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "peekViewResult.matchHighlightBackground": `${settings.ui.foreground}30`,

        "diffEditor.insertedTextBackground": `${settings.common.blue}20`,
        "diffEditor.removedTextBackground": `${settings.common.red}20`,
        "diffEditor.insertedLineBackground": `${settings.common.blue}20`,
        "diffEditor.removedLineBackground": `${settings.common.red}20`,
        "diffEditorGutter.insertedLineBackground": `${settings.common.blue}25`,
        "diffEditorGutter.removedLineBackground": `${settings.common.red}25`,
        "diffEditorOverview.insertedForeground": `${settings.common.blue}25`,
        "diffEditorOverview.removedForeground": `${settings.common.red}25`,
        "diffEditor.diagonalFill": "#292e42",

        "breadcrumb.background": settings.ui.panelBackground,
        "breadcrumbPicker.background": settings.ui.panelBackground,
        "breadcrumb.foreground": `${settings.ui.foreground}70`,
        "breadcrumb.focusForeground": settings.ui.foreground,
        "breadcrumb.activeSelectionForeground": settings.ui.foreground,

        "tab.activeBackground": settings.ui.editorBackground,
        "tab.inactiveBackground": settings.ui.panelBackground,
        "tab.activeForeground": settings.ui.foreground,
        "tab.hoverForeground": settings.ui.foreground,
        "tab.activeBorderTop": settings.ui.accent,
        "tab.activeBorder": settings.ui.editorBackground,
        "tab.inactiveForeground": `${settings.ui.foreground}80`,
        "tab.border": settings.ui.border,
        "tab.unfocusedActiveForeground": settings.ui.foreground,
        "tab.unfocusedInactiveForeground": `${settings.ui.foreground}80`,
        "tab.unfocusedHoverForeground": settings.ui.foreground,
        "tab.activeModifiedBorder": "#1a1b26",
        "tab.inactiveModifiedBorder": settings.ui.border,
        "tab.unfocusedActiveBorder": settings.ui.border,
        "tab.lastPinnedBorder": settings.ui.border,

        "panel.background": settings.ui.panelBackground,
        "panel.border": settings.ui.border,
        "panel.dropBorder": settings.ui.accent,
        "panelTitle.activeBorder": settings.ui.panelBackground,
        "panelTitle.activeForeground": settings.ui.foreground,
        "panelTitle.inactiveForeground": `${settings.ui.foreground}70`,
        "panelInput.border": settings.ui.border,
        "panelSectionHeader.background": "#00000030",
        "panelSectionHeader.border": settings.ui.border,

        "statusBar.foreground": `${settings.ui.foreground}AA`,
        "statusBar.background": settings.ui.editorBackground,
        "statusBar.border": settings.ui.border,
        "statusBar.noFolderBackground": settings.ui.panelBackground,
        "statusBar.debuggingBackground": settings.common.yellow,
        "statusBar.debuggingBorder": settings.common.yellow,
        "statusBar.debuggingForeground": "#00000098",

        "statusBarItem.activeBackground": "#00000020",
        "statusBarItem.hoverBackground": "#ffffff10",
        "statusBarItem.prominentBackground": "#00000030",
        "statusBarItem.prominentHoverBackground": "#00000030",

        "titleBar.activeForeground": tinycolor(settings.ui.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "titleBar.inactiveForeground": tinycolor(settings.ui.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "titleBar.activeBackground": settings.ui.editorBackground,
        "titleBar.inactiveBackground": settings.ui.editorBackground,
        "titleBar.border": settings.ui.border,

        "walkThrough.embeddedEditorBackground": settings.ui.panelBackground,

        "textLink.foreground": settings.ui.accent,
        "textLink.activeForeground": tinycolor(settings.ui.accent)
          .lighten(10)
          .toHexString(),
        "textPreformat.foreground": settings.ui.accent,
        "textBlockQuote.background": settings.ui.panelBackground,
        "textCodeBlock.background": settings.ui.panelBackground,
        "textSeparator.foreground": `${settings.ui.foreground}60`,

        "debugExceptionWidget.border": settings.common.red,
        "debugExceptionWidget.background": settings.ui.border,
        "debugToolBar.background": settings.ui.border,

        "debugConsole.sourceForeground": tinycolor(settings.ui.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "debugConsole.infoForeground": tinycolor(settings.ui.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "debugConsole.errorForeground": tinycolor(settings.common.red)
          .lighten(10)
          .toHexString(),
        "debugConsole.warningForeground": tinycolor(settings.common.yellow)
          .darken(10)
          .toHexString(),
        "debugConsoleInputIcon.foreground": settings.ui.foreground,

        "editor.stackFrameHighlightBackground": "#E2BD3A20",
        "editor.focusedStackFrameHighlightBackground": "#73daca20",
        "debugView.stateLabelForeground": tinycolor(settings.ui.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "debugView.stateLabelBackground": settings.ui.border,
        "debugView.valueChangedHighlight": settings.common.blue,
        "debugTokenExpression.name": settings.common.blue,
        "debugTokenExpression.value": settings.common.purple,
        "debugTokenExpression.string": settings.common.green,
        "debugTokenExpression.boolean": settings.common.yellow,
        "debugTokenExpression.number": settings.common.yellow,
        "debugTokenExpression.error": settings.common.red,

        "debugIcon.stopForeground": settings.common.red,
        "debugIcon.restartForeground": settings.common.green,
        "debugIcon.pauseForeground": settings.common.blue,

        "debugIcon.breakpointForeground": settings.common.red,
        "debugIcon.breakpointDisabledForeground": `${settings.ui.foreground}AA`,
        "debugIcon.breakpointUnverifiedForeground": `${settings.common.red}AA`,

        "terminal.background": settings.ui.panelBackground,
        "terminal.foreground": settings.ui.foreground,
        "terminal.selectionBackground": `${settings.ui.foreground}20`,

        "terminal.ansiBlack": `${settings.ui.foreground}20`,
        "terminal.ansiRed": `${settings.common.red}DD`,
        "terminal.ansiGreen": `${settings.common.green}DD`,
        "terminal.ansiYellow": `${settings.common.yellow}DD`,
        "terminal.ansiBlue": `${settings.common.blue}DD`,
        "terminal.ansiMagenta": `${settings.common.purple}DD`,
        "terminal.ansiCyan": `${settings.common.blue}DD`,
        "terminal.ansiWhite": `${settings.ui.foreground}DD`,
        "terminal.ansiBrightBlack": `${settings.ui.foreground}10`,
        "terminal.ansiBrightRed": settings.common.red,
        "terminal.ansiBrightGreen": settings.common.green,
        "terminal.ansiBrightYellow": settings.common.yellow,
        "terminal.ansiBrightBlue": settings.common.blue,
        "terminal.ansiBrightMagenta": settings.common.purple,
        "terminal.ansiBrightCyan": settings.common.blue,
        "terminal.ansiBrightWhite": settings.ui.foreground,

        "gitDecoration.addedResourceForeground": `${settings.common.green}DD`,
        "gitDecoration.untrackedResourceForeground": `${settings.common.green}DD`,
        "gitDecoration.renamedResourceForeground": `${settings.common.yellow}DD`,
        "gitDecoration.modifiedResourceForeground": `${settings.common.yellow}DD`,
        "gitDecoration.stageModifiedResourceForeground": `${settings.common.yellow}DD`,
        "gitDecoration.deletedResourceForeground": `${settings.common.red}DD`,
        "gitDecoration.stageDeletedResourceForeground": `${settings.common.red}DD`,
        "gitDecoration.conflictingResourceForeground": `${settings.common.purple}DD`,
        "gitDecoration.ignoredResourceForeground": `${settings.ui.foreground}60`,

        "notebook.editorBackground": "#1a1b26",
        "notebook.cellEditorBackground": settings.ui.panelBackground,
        "notebook.cellBorderColor": settings.ui.border,
        "notebook.focusedCellBorder": "#29355a",
        "notebook.cellStatusBarItemHoverBackground": "#1c1d29",

        "charts.red": settings.common.red,
        "charts.blue": settings.common.blue,
        "charts.yellow": settings.common.yellow,
        "charts.orange": settings.common.orange,
        "charts.green": settings.common.green,
        "charts.purple": settings.common.purple,
        "charts.foreground": settings.ui.foreground,
        "charts.lines": settings.ui.panelBackground,

        "merge.currentHeaderBackground": `${settings.common.blue}25`,
        "merge.currentContentBackground": `${settings.common.blue}45`,
        "merge.incomingHeaderBackground": `${settings.common.blue}AA`,
        "merge.incomingContentBackground": `${settings.common.blue}45`,
        "mergeEditor.change.background": `${settings.common.blue}25`,
        "mergeEditor.change.word.background": `${settings.common.blue}40`,
        "mergeEditor.conflict.unhandledUnfocused.border": `${settings.common.yellow}25`,
        "mergeEditor.conflict.unhandledFocused.border": `${settings.common.yellow}65`,
        "mergeEditor.conflict.handledUnfocused.border": `${settings.common.blue}25`,
        "mergeEditor.conflict.handledFocused.border": `${settings.common.blue}65`,
        "mergeEditor.conflict.handled.minimapOverViewRuler":
          settings.common.blue,
        "mergeEditor.conflict.unhandled.minimapOverViewRuler":
          settings.common.yellow,

        "menubar.selectionForeground": settings.ui.foreground,
        "menubar.selectionBackground": "#1e202e",
        "menubar.selectionBorder": "#1b1e2e",
        "menu.foreground": tinycolor(settings.ui.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "menu.background": settings.ui.panelBackground,
        "menu.selectionForeground": settings.ui.foreground,
        "menu.selectionBackground": "#1e202e",
        "menu.separatorBackground": settings.ui.border,
        "menu.border": settings.ui.border,

        "notificationCenterHeader.background": settings.ui.border,
        "notifications.background": "#181825",
        "notificationLink.foreground": settings.common.blue,
        "notificationsErrorIcon.foreground": settings.common.red,
        "notificationsWarningIcon.foreground": settings.common.yellow,
        "notificationsInfoIcon.foreground": settings.common.yellow,

        "keybindingLabel.foreground": settings.ui.panelBackground,
        "keybindingLabel.background": settings.ui.foreground,
        "keybindingLabel.border": settings.ui.foreground,
        "keybindingLabel.bottomBorder": settings.ui.foreground,
        "keybindingTable.headerBackground": settings.ui.foreground,
        "keybindingTable.rowsBackground": settings.ui.foreground,

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
            foreground: `${settings.ui.foreground}60`,
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
            foreground: settings.ui.foreground,
          },
        },
        {
          name: "Variables",
          scope: ["variable", "variable.other.enummember"],
          settings: {
            foreground: settings.ui.foreground,
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
            foreground: tinycolor(settings.syntax.attributes)
              .lighten(10)
              .toHex8String(),
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
            foreground: tinycolor(settings.syntax.attributes)
              .lighten(10)
              .toHex8String(),
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
            foreground: settings.ui.foreground,
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
              .lighten(10)
              .toHex8String(),
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
            foreground: settings.syntax.storage,
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
            foreground: settings.common.red,
          },
        },
        {
          name: "Changed",
          scope: ["markup.changed"],
          settings: {
            foreground: settings.common.purple,
          },
        },
        {
          name: "Regular Expressions",
          scope: ["string.regexp"],
          settings: {
            foreground: settings.common.purple,
          },
        },
        {
          name: "Escape Characters",
          scope: ["constant.character.escape"],
          settings: {
            foreground: settings.common.purple,
          },
        },
        {
          name: "URL",
          scope: ["*url*", "*link*", "*uri*"],
          settings: {
            fontStyle: "underline",
            foreground: settings.common.blue,
          },
        },

        {
          name: "Markdown - Plain",
          scope: [
            "text.html.markdown",
            "punctuation.definition.list_item.markdown",
          ],
          settings: {
            foreground: settings.ui.foreground,
          },
        },
        {
          name: "Markdown heading",
          scope: ["markup.heading.markdown"],
          settings: {
            foreground: tinycolor(settings.common.blue)
              .lighten(20)
              .toHexString(),
          },
        },
        {
          name: "Markdown - Heading mark",
          scope: [
            "markup.heading | markup.heading entity.name",
            "markup.heading.markdown punctuation.definition.heading.markdown",
          ],
          settings: {
            foreground: `${settings.common.blue}AA`,
          },
        },
        {
          name: "Markdown - Markup Raw Inline",
          scope: ["text.html.markdown markup.inline.raw.markdown"],
          settings: {
            foreground: settings.common.purple,
          },
        },
        {
          name: "Markdown - Markup Raw Inline Punctuation",
          scope: [
            "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
          ],
          settings: {
            foreground: `${settings.ui.foreground}AA`,
          },
        },

        {
          name: "Markup - Italic",
          scope: ["markup.italic"],
          settings: {
            fontStyle: "italic",
            foreground: settings.common.yellow,
          },
        },
        {
          name: "Markup - Bold",
          scope: ["markup.bold", "markup.bold string"],
          settings: {
            fontStyle: "bold",
            foreground: settings.common.yellow,
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
            foreground: settings.common.yellow,
          },
        },
        {
          name: "Markup - Underline",
          scope: ["markup.underline"],
          settings: {
            fontStyle: "underline",
            foreground: settings.common.green,
          },
        },
        {
          name: "Markdown - Blockquote",
          scope: ["markup.quote punctuation.definition.blockquote.markdown"],
          settings: {
            foreground: `${settings.ui.foreground}AA`,
          },
        },
        {
          name: "Markup - Quote",
          scope: ["markup.quote"],
          settings: {
            fontStyle: "italic",
            foreground: settings.common.blue,
          },
        },
        {
          name: "Markdown - Image",
          scope: [
            "meta.image.inline.markdown",
            "string.other.link.description.markdown",
          ],
          settings: {
            foreground: settings.common.yellow,
          },
        },
        {
          name: "Markdown - Link",
          scope: ["string.other.link.title.markdown"],
          settings: {
            foreground: settings.common.yellow,
          },
        },
        {
          name: "Markdown - Link Description",
          scope: ["string.other.link.description.title.markdown"],
          settings: {
            foreground: settings.common.blue,
          },
        },
        {
          name: "Markdown - Link Anchor",
          scope: ["constant.other.reference.link.markdown"],
          settings: {
            foreground: settings.common.green,
          },
        },
        {
          name: "Markup - Raw Block",
          scope: ["markup.raw.block"],
          settings: {
            foreground: settings.common.purple,
          },
        },
        {
          name: "Markdown - Raw Block Fenced",
          scope: ["markup.raw.block.fenced.markdown"],
          settings: {
            foreground: `${settings.ui.foreground}50`,
          },
        },
        {
          name: "Markdown - Fenced Bode Block",
          scope: ["punctuation.definition.fenced.markdown"],
          settings: {
            foreground: `${settings.ui.foreground}30`,
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
            foreground: settings.ui.foreground,
          },
        },
        {
          name: "Markdown - Fenced Language",
          scope: ["variable.language.fenced.markdown"],
          settings: {
            foreground: `${settings.ui.foreground}AA`,
          },
        },
        {
          name: "Markdown - Separator",
          scope: ["meta.separator"],
          settings: {
            fontStyle: "bold",
            foreground: `${settings.ui.foreground}AA`,
          },
        },
        {
          name: "Markup - Table",
          scope: ["markup.table"],
          settings: {
            foreground: settings.ui.foreground,
          },
        },
      ],
      semanticTokenColors: {},
      semanticHighlighting: true,
    };
  }
}
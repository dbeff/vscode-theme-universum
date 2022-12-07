import tinycolor from "tinycolor2";
import prettier from "prettier";

export namespace Theme {
  export interface UI {
    editorBackground: string;
    panelBackground: string;
    foreground: string;
    border: string;
    accent: string;
  }
  export interface Syntax {
    keywords: string;
    storage: string;
    string: string;
    attributes: string;
    arguments: string;
    tags: string;
    special: string;
  }

  export interface Palette {
    green: string;
    red: string;
    yellow: string;
    orange: string;
    blue: string;
    purple: string;
    pink: string;
  }

  export interface Settings {
    ui: UI;
    syntax: Syntax;
    palette: Palette;
  }

  export const uiDefault = (color: string, accent?: string): UI => ({
    panelBackground: color,
    editorBackground: tinycolor(color).lighten(3).toHexString(),
    foreground: tinycolor(color).lighten(65).toString(),
    border: tinycolor(color).darken(5).toHexString(),
    accent: accent || tinycolor(color).lighten(35).saturate(20).toString(),
  });

  export const paletteDefault: Palette = {
    red: "#E65C75",
    blue: "#0EC2E6",
    yellow: "#E5C07B",
    orange: "#E69770",
    green: "#88CC7E",
    purple: "#BF98E6",
    pink: "#E69AC0",
  };

  export const syntaxDefault: Syntax = {
    keywords: paletteDefault.red,
    storage: paletteDefault.blue,
    string: paletteDefault.green,
    attributes: paletteDefault.yellow,
    arguments: paletteDefault.purple,
    tags: paletteDefault.blue,
    special: paletteDefault.purple,
  };

  export function prettify(object: unknown) {
    return prettier.format(JSON.stringify(object, undefined, 2), {
      parser: "json",
    });
  }

  export function getSchema(settings: Theme.Settings): unknown {
    const accentForeground = tinycolor(settings.ui.accent)
      .lighten(45)
      .toString();

    const findMatchBackground = tinycolor(settings.palette.yellow)
      .setAlpha(0.2)
      .toHex8String();

    const findMatchBorder = tinycolor(settings.palette.yellow)
      .setAlpha(0.8)
      .toHexString();

    return {
      $schema: "vscode://schemas/color-theme",
      name: "Universum",
      type: "dark",
      colors: {
        foreground: settings.ui.foreground,
        errorForeground: `${settings.ui.foreground}60`,
        descriptionForeground: `${settings.ui.foreground}80`,
        focusBorder: `${settings.ui.accent}AA`,
        "selection.background": tinycolor(settings.ui.panelBackground)
          .lighten(10)
          .toHexString(),
        "widget.shadow": `${settings.ui.border}80`,
        "scrollbar.shadow": `${settings.ui.border}30`,
        "icon.foreground": tinycolor(settings.ui.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "window.activeBorder": settings.ui.border,
        "window.inactiveBorder": settings.ui.border,
        "sash.hoverBorder": settings.ui.accent,

        "searchEditor.findMatchBorder": findMatchBorder,
        "searchEditor.textInputBorder": settings.ui.border,

        "settings.headerForeground": settings.ui.foreground,
        "settings.headerBorder": settings.ui.border,
        "settings.modifiedItemIndicator": settings.ui.accent,
        "settings.rowHoverBackground": tinycolor(settings.ui.editorBackground)
          .lighten(3)
          .toHexString(),
        "settings.focusedRowBackground": tinycolor(settings.ui.editorBackground)
          .lighten(5)
          .toHexString(),

        "badge.background": settings.ui.accent,
        "badge.foreground": accentForeground,

        "toolbar.activeBackground": tinycolor(settings.ui.panelBackground)
          .lighten(10)
          .toHexString(),
        "toolbar.hoverBackground": tinycolor(settings.ui.panelBackground)
          .lighten(10)
          .toHexString(),

        "extensionButton.prominentBackground": `${settings.ui.accent}DD`,
        "extensionButton.prominentHoverBackground": `${settings.ui.accent}AA`,
        "extensionButton.prominentForeground": accentForeground,
        "extensionBadge.remoteBackground": `${settings.ui.accent}`,
        "extensionBadge.remoteForeground": accentForeground,
        "extensionIcon.starForeground": settings.palette.yellow,

        "button.background": `${settings.ui.accent}`,
        "button.hoverBackground": `${settings.ui.accent}BB`,
        "button.secondaryBackground": `${settings.ui.accent}`,
        "button.foreground": accentForeground,
        "progressBar.background": `${settings.ui.accent}`,

        "input.background": settings.ui.panelBackground,
        "input.foreground": settings.ui.foreground,
        "input.border": settings.ui.border,
        "input.placeholderForeground": `${settings.ui.foreground}80`,

        "inputOption.activeForeground": settings.ui.foreground,
        "inputOption.hoverBackground:": tinycolor(settings.ui.panelBackground)
          .lighten(10)
          .toHexString(),
        "inputOption.activeBackground": tinycolor(settings.ui.panelBackground)
          .lighten(10)
          .toHexString(),

        "inputValidation.infoForeground": settings.ui.foreground,
        "inputValidation.infoBackground": tinycolor(settings.palette.blue)
          .darken(50)
          .toString(),
        "inputValidation.infoBorder": settings.palette.blue,
        "inputValidation.warningForeground": settings.ui.foreground,
        "inputValidation.warningBackground": tinycolor(settings.palette.yellow)
          .darken(50)
          .toString(),
        "inputValidation.warningBorder": settings.palette.yellow,
        "inputValidation.errorForeground": settings.ui.foreground,
        "inputValidation.errorBackground": tinycolor(settings.palette.red)
          .darken(50)
          .toString(),
        "inputValidation.errorBorder": settings.palette.red,

        "dropdown.foreground": `${settings.ui.foreground}90`,
        "dropdown.background": settings.ui.panelBackground,
        "dropdown.listBackground": settings.ui.panelBackground,
        "dropdown.border": settings.ui.border,

        "activityBar.dropBorder": settings.ui.accent,
        "activityBar.border": settings.ui.border,
        "activityBar.background": settings.ui.editorBackground,
        "activityBar.foreground": settings.ui.foreground,
        "activityBar.inactiveForeground": `${settings.ui.foreground}60`,
        "activityBar.activeBorder": settings.ui.accent,
        "activityBarBadge.background": `${settings.ui.accent}`,
        "activityBarBadge.foreground": accentForeground,

        "tree.indentGuidesStroke": tinycolor(settings.ui.panelBackground)
          .lighten(15)
          .toHexString(),
        "sideBar.foreground": `${settings.ui.foreground}DD`,
        "sideBar.background": settings.ui.panelBackground,
        "sideBar.border": settings.ui.border,
        "sideBarTitle.foreground": `${settings.ui.foreground}80`,
        "sideBarSectionHeader.background": settings.ui.panelBackground,
        "sideBarSectionHeader.foreground": settings.ui.foreground,
        "sideBarSectionHeader.border": settings.ui.border,
        "sideBar.dropBackground": `${settings.ui.accent}40`,

        "list.focusAndSelectionOutline": settings.ui.accent,
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
        "list.invalidItemForeground": `${settings.palette.purple}DD`,
        "list.errorForeground": `${settings.palette.red}DD`,
        "list.warningForeground": `${settings.palette.yellow}DD`,

        "listFilterWidget.background": settings.ui.border,
        "listFilterWidget.outline": settings.palette.blue,
        "listFilterWidget.noMatchesOutline": settings.palette.red,

        "pickerGroup.foreground": settings.ui.foreground,
        "pickerGroup.border": settings.ui.border,

        "scrollbarSlider.background": tinycolor(settings.ui.panelBackground)
          .lighten(20)
          .setAlpha(0.4)
          .toHex8String(),

        "scrollbarSlider.hoverBackground": tinycolor(
          settings.ui.panelBackground
        )
          .lighten(25)
          .setAlpha(0.4)
          .toHex8String(),
        "scrollbarSlider.activeBackground": tinycolor(
          settings.ui.panelBackground
        )
          .lighten(30)
          .setAlpha(0.4)
          .toHex8String(),

        "editorBracketHighlight.foreground1": `${settings.syntax.storage}CC`,
        "editorBracketHighlight.foreground2": `${settings.syntax.attributes}CC`,
        "editorBracketHighlight.foreground3": `${settings.syntax.storage}CC`,
        "editorBracketHighlight.foreground4": `${settings.syntax.attributes}CC`,
        "editorBracketHighlight.foreground5": `${settings.syntax.storage}CC`,
        "editorBracketHighlight.foreground6": `${settings.syntax.attributes}CC`,

        "editorBracketHighlight.unexpectedBracket.foreground": `${settings.palette.red}`,

        "editorBracketPairGuide.activeBackground1": `${settings.syntax.storage}AA`,
        "editorBracketPairGuide.activeBackground2": `${settings.syntax.attributes}AA`,
        "editorBracketPairGuide.activeBackground3": `${settings.syntax.storage}AA`,
        "editorBracketPairGuide.activeBackground4": `${settings.syntax.attributes}AA`,
        "editorBracketPairGuide.activeBackground5": `${settings.syntax.storage}AA`,
        "editorBracketPairGuide.activeBackground6": `${settings.syntax.attributes}AA`,

        "editor.background": settings.ui.editorBackground,
        "editor.foreground": settings.ui.foreground,
        "editor.foldBackground": tinycolor(settings.ui.editorBackground)
          .lighten(10)
          .toString(),
        "editorLink.activeForeground": tinycolor(settings.ui.accent)
          .lighten(10)
          .toHexString(),

        "editor.selectionBackground": tinycolor(settings.ui.editorBackground)
          .lighten(15)
          .toHexString(),
        "editor.inactiveSelectionBackground": tinycolor(
          settings.ui.editorBackground
        )
          .lighten(5)
          .toHexString(),

        "editor.findMatchBackground": findMatchBackground,
        "editor.findMatchBorder": findMatchBorder,
        "editor.findMatchHighlightBackground": findMatchBackground,

        "editor.findRangeHighlightBackground": tinycolor(
          settings.ui.editorBackground
        )
          .lighten(15)
          .toHexString(),
        "editor.rangeHighlightBackground": `${settings.palette.yellow}20`,
        "editor.wordHighlightBackground": tinycolor(
          settings.ui.editorBackground
        )
          .lighten(7)
          .toHexString(),
        "editor.wordHighlightStrongBackground": tinycolor(
          settings.ui.editorBackground
        )
          .lighten(7)
          .toHexString(),

        "editor.selectionHighlightBackground": tinycolor(
          settings.ui.editorBackground
        )
          .lighten(15)
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
        "editorOverviewRuler.errorForeground": `${settings.palette.red}CC`,
        "editorOverviewRuler.warningForeground": `${settings.palette.yellow}CC`,
        "editorOverviewRuler.infoForeground": `${settings.palette.blue}CC`,
        "editorOverviewRuler.bracketMatchForeground": settings.ui.border,
        "editorOverviewRuler.findMatchForeground": `${settings.ui.foreground}44`,
        "editorOverviewRuler.rangeHighlightForeground": `${settings.ui.foreground}44`,
        "editorOverviewRuler.selectionHighlightForeground": `${settings.ui.foreground}22`,
        "editorOverviewRuler.wordHighlightForeground": `${settings.palette.green}50`,
        "editorOverviewRuler.wordHighlightStrongForeground": `${settings.palette.purple}60`,
        "editorOverviewRuler.modifiedForeground": `${settings.palette.blue}60`,
        "editorOverviewRuler.addedForeground": `${settings.palette.green}60`,
        "editorOverviewRuler.deletedForeground": `${settings.palette.red}60`,

        "editorRuler.foreground": settings.ui.border,
        "editorError.foreground": settings.palette.red,
        "editorWarning.foreground": settings.palette.yellow,
        "editorInfo.foreground": settings.palette.blue,
        "editorHint.foreground": settings.palette.blue,

        "editorInlayHint.background": tinycolor(settings.ui.editorBackground)
          .lighten(10)
          .toHexString(),
        "editorInlayHint.foreground": tinycolor(settings.ui.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "editorInlayHint.typeForeground": tinycolor(settings.ui.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "editorInlayHint.parameterForeground": tinycolor(settings.ui.foreground)
          .setAlpha(0.5)
          .toHex8String(),

        "editorGutter.modifiedBackground": `${settings.palette.blue}AA`,
        "editorGutter.addedBackground": `${settings.palette.green}AA`,
        "editorGutter.deletedBackground": `${settings.palette.red}AA`,

        "editorGhostText.foreground": `${settings.ui.foreground}AA`,

        "minimapGutter.modifiedBackground": `${settings.palette.blue}AA`,
        "minimapGutter.addedBackground": `${settings.palette.green}AA`,
        "minimapGutter.deletedBackground": `${settings.palette.red}AA`,

        "editorGroup.border": settings.ui.border,
        "editorGroup.dropBackground": `${settings.ui.accent}40`,
        "editorGroup.emptyBackground": settings.ui.editorBackground,
        "editorGroupHeader.tabsBorder": settings.ui.border,
        "editorGroupHeader.tabsBackground": settings.ui.panelBackground,
        "editorGroupHeader.noTabsBackground": settings.ui.panelBackground,
        "editorGroupHeader.border": settings.ui.border,

        "editorPane.background": settings.ui.panelBackground,

        "editorWidget.border": settings.ui.border,
        "editorWidget.background": settings.ui.panelBackground,
        "editorWidget.resizeBorder": settings.ui.accent,

        "editorSuggestWidget.background": settings.ui.panelBackground,
        "editorSuggestWidget.border": settings.ui.border,
        "editorSuggestWidget.highlightForeground": settings.ui.accent,
        "editorSuggestWidget.selectedBackground": tinycolor(
          settings.ui.panelBackground
        )
          .lighten(10)
          .toHexString(),

        "editorCodeLens.foreground": `${settings.ui.foreground}AA`,
        "editorLightBulb.foreground": settings.palette.yellow,
        "editorLightBulbAutoFix.foreground": tinycolor(settings.palette.yellow)
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

        "diffEditor.insertedTextBackground": `${settings.palette.blue}20`,
        "diffEditor.removedTextBackground": `${settings.palette.red}20`,
        "diffEditor.insertedLineBackground": `${settings.palette.blue}20`,
        "diffEditor.removedLineBackground": `${settings.palette.red}20`,
        "diffEditorGutter.insertedLineBackground": `${settings.palette.blue}25`,
        "diffEditorGutter.removedLineBackground": `${settings.palette.red}25`,
        "diffEditorOverview.insertedForeground": `${settings.palette.blue}25`,
        "diffEditorOverview.removedForeground": `${settings.palette.red}25`,
        "diffEditor.diagonalFill": `${settings.palette.red}50`,

        "breadcrumb.background": settings.ui.editorBackground,
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
        "tab.activeModifiedBorder": settings.ui.accent,
        "tab.inactiveModifiedBorder": `${settings.ui.accent}80`,
        "tab.unfocusedActiveBorder": `${settings.ui.accent}80`,
        "tab.lastPinnedBorder": settings.ui.border,

        "panel.background": settings.ui.panelBackground,
        "panel.border": settings.ui.border,
        "panel.dropBorder": settings.ui.accent,
        "panelTitle.activeBorder": settings.ui.panelBackground,
        "panelTitle.activeForeground": settings.ui.foreground,
        "panelTitle.inactiveForeground": `${settings.ui.foreground}70`,
        "panelInput.border": settings.ui.border,

        "panelSectionHeader.border": settings.ui.border,
        "panelSectionHeader.background": tinycolor(settings.ui.panelBackground)
          .darken(3)
          .toString(),
        "panelSectionHeader.foreground": settings.ui.foreground,

        "statusBar.foreground": `${settings.ui.foreground}AA`,
        "statusBar.background": settings.ui.editorBackground,
        "statusBar.border": settings.ui.border,
        "statusBar.noFolderBackground": settings.ui.panelBackground,
        "statusBar.debuggingBackground": settings.palette.yellow,
        "statusBar.debuggingBorder": settings.ui.border,
        "statusBar.debuggingForeground": tinycolor(settings.palette.yellow)
          .darken(50)
          .toString(),

        "statusBarItem.activeBackground": "#00000020",
        "statusBarItem.hoverBackground": "#ffffff10",
        "statusBarItem.prominentBackground": "#00000030",
        "statusBarItem.prominentHoverBackground": "#00000030",
        "statusBarItem.errorForeground": settings.palette.red,
        "statusBarItem.warningForeground": settings.palette.yellow,

        "statusBarItem.remoteBackground": settings.ui.accent,
        "statusBarItem.remoteForeground": accentForeground,

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
        "textSeparator.foreground": `${settings.ui.panelBackground}60`,

        "debugExceptionWidget.border": settings.palette.red,
        "debugExceptionWidget.background": settings.ui.border,
        "debugToolBar.border": settings.ui.border,
        "debugToolBar.background": tinycolor(settings.ui.panelBackground)
          .darken(3)
          .toString(),

        "debugConsole.sourceForeground": tinycolor(settings.ui.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "debugConsole.infoForeground": tinycolor(settings.ui.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "debugConsole.errorForeground": tinycolor(settings.palette.red)
          .lighten(10)
          .toHexString(),
        "debugConsole.warningForeground": tinycolor(settings.palette.yellow)
          .darken(10)
          .toHexString(),
        "debugConsoleInputIcon.foreground": settings.ui.foreground,

        "editor.stackFrameHighlightBackground": `${settings.palette.yellow}20`,
        "editor.focusedStackFrameHighlightBackground": `${settings.palette.blue}20`,

        "debugView.stateLabelForeground": accentForeground,
        "debugView.stateLabelBackground": settings.ui.accent,
        "debugView.valueChangedHighlight": settings.palette.blue,

        "debugTokenExpression.name": settings.syntax.attributes,
        "debugTokenExpression.value": settings.ui.foreground,
        "debugTokenExpression.string": settings.syntax.string,
        "debugTokenExpression.boolean": settings.syntax.storage,
        "debugTokenExpression.number": settings.syntax.storage,
        "debugTokenExpression.error": settings.palette.red,

        "debugIcon.stopForeground": settings.palette.red,
        "debugIcon.restartForeground": settings.palette.green,
        "debugIcon.pauseForeground": settings.palette.blue,

        "debugIcon.breakpointForeground": settings.palette.red,
        "debugIcon.breakpointDisabledForeground": `${settings.ui.foreground}AA`,
        "debugIcon.breakpointUnverifiedForeground": `${settings.palette.red}AA`,

        "testing.iconErrored": settings.palette.purple,
        "testing.iconFailed": settings.palette.red,
        "testing.iconPassed": settings.palette.green,
        "testing.runAction": settings.palette.green,

        "testing.iconQueued": settings.palette.blue,
        "testing.iconUnset": `${settings.ui.foreground}80`,
        "testing.iconSkipped": settings.palette.yellow,

        "testing.message.error.decorationForeground": settings.palette.red,
        "testing.message.error.lineBackground": `${settings.palette.red}30`,
        "testing.message.info.decorationForeground": settings.palette.blue,
        "testing.message.info.lineBackground": `${settings.palette.blue}30`,

        "terminal.background": settings.ui.panelBackground,
        "terminal.foreground": settings.ui.foreground,
        "terminal.selectionBackground": `${settings.ui.foreground}20`,

        "terminal.ansiBlack": `${settings.ui.foreground}20`,
        "terminal.ansiRed": settings.palette.red,
        "terminal.ansiGreen": settings.palette.green,
        "terminal.ansiYellow": settings.palette.yellow,
        "terminal.ansiBlue": settings.palette.blue,
        "terminal.ansiMagenta": settings.palette.purple,
        "terminal.ansiCyan": settings.palette.blue,
        "terminal.ansiWhite": settings.ui.foreground,
        "terminal.ansiBrightBlack": settings.ui.panelBackground,
        "terminal.ansiBrightRed": settings.palette.red,
        "terminal.ansiBrightGreen": settings.palette.green,
        "terminal.ansiBrightYellow": settings.palette.yellow,
        "terminal.ansiBrightBlue": settings.palette.blue,
        "terminal.ansiBrightMagenta": settings.palette.purple,
        "terminal.ansiBrightCyan": settings.palette.blue,
        "terminal.ansiBrightWhite": settings.ui.foreground,

        "gitDecoration.addedResourceForeground": `${settings.palette.green}DD`,
        "gitDecoration.untrackedResourceForeground": `${settings.palette.green}DD`,
        "gitDecoration.renamedResourceForeground": `${settings.palette.yellow}DD`,
        "gitDecoration.modifiedResourceForeground": `${settings.palette.yellow}DD`,
        "gitDecoration.stageModifiedResourceForeground": `${settings.palette.yellow}DD`,
        "gitDecoration.deletedResourceForeground": `${settings.palette.red}DD`,
        "gitDecoration.stageDeletedResourceForeground": `${settings.palette.red}DD`,
        "gitDecoration.conflictingResourceForeground": `${settings.palette.purple}DD`,
        "gitDecoration.ignoredResourceForeground": `${settings.ui.foreground}60`,

        "notebook.editorBackground": settings.ui.editorBackground,
        "notebook.cellEditorBackground": settings.ui.panelBackground,
        "notebook.cellBorderColor": settings.ui.border,
        "notebook.focusedCellBorder": settings.ui.accent,
        "notebook.cellStatusBarItemHoverBackground":
          settings.ui.panelBackground,

        "charts.red": settings.palette.red,
        "charts.blue": settings.palette.blue,
        "charts.yellow": settings.palette.yellow,
        "charts.orange": settings.palette.orange,
        "charts.green": settings.palette.green,
        "charts.purple": settings.palette.purple,
        "charts.foreground": settings.ui.foreground,
        "charts.lines": settings.ui.panelBackground,

        "merge.currentHeaderBackground": `${settings.palette.blue}25`,
        "merge.currentContentBackground": `${settings.palette.blue}45`,
        "merge.incomingHeaderBackground": `${settings.palette.blue}AA`,
        "merge.incomingContentBackground": `${settings.palette.blue}45`,
        "mergeEditor.change.background": `${settings.palette.blue}25`,
        "mergeEditor.change.word.background": `${settings.palette.blue}40`,
        "mergeEditor.conflict.unhandledUnfocused.border": `${settings.palette.yellow}25`,
        "mergeEditor.conflict.unhandledFocused.border": `${settings.palette.yellow}65`,
        "mergeEditor.conflict.handledUnfocused.border": `${settings.palette.blue}25`,
        "mergeEditor.conflict.handledFocused.border": `${settings.palette.blue}65`,
        "mergeEditor.conflict.handled.minimapOverViewRuler":
          settings.palette.blue,
        "mergeEditor.conflict.unhandled.minimapOverViewRuler":
          settings.palette.yellow,

        "menubar.selectionForeground": settings.ui.foreground,
        "menubar.selectionBackground": settings.ui.panelBackground,
        "menubar.selectionBorder": settings.ui.panelBackground,
        "menu.foreground": tinycolor(settings.ui.foreground)
          .setAlpha(0.5)
          .toHex8String(),
        "menu.background": settings.ui.panelBackground,
        "menu.selectionForeground": settings.ui.foreground,
        "menu.selectionBackground": tinycolor(settings.ui.editorBackground)
          .lighten(10)
          .toHexString(),
        "menu.separatorBackground": settings.ui.border,
        "menu.border": settings.ui.border,

        "commandCenter.background": settings.ui.panelBackground,
        "commandCenter.border": settings.ui.border,
        "commandCenter.inactiveBorder": settings.ui.border,

        "notificationCenterHeader.background": settings.ui.panelBackground,
        "notificationCenterHeader.border": settings.ui.border,
        "notificationToast.border": settings.ui.border,
        "notifications.border": settings.ui.border,
        "notifications.background": settings.ui.panelBackground,
        "notificationLink.foreground": settings.palette.blue,
        "notificationsErrorIcon.foreground": settings.palette.red,
        "notificationsWarningIcon.foreground": settings.palette.yellow,
        "notificationsInfoIcon.foreground": settings.palette.yellow,

        "keybindingLabel.foreground": accentForeground,
        "keybindingLabel.background": settings.ui.accent,
        "keybindingLabel.border": settings.ui.accent,
        "keybindingLabel.bottomBorder": settings.ui.accent,
        "keybindingTable.headerBackground": settings.ui.panelBackground,
        "keybindingTable.rowsBackground": settings.ui.editorBackground,

        "symbolIcon.arrayForeground": settings.palette.blue,
        "symbolIcon.booleanForeground": settings.palette.blue,
        "symbolIcon.classForeground": settings.palette.yellow,
        "symbolIcon.namespaceForeground": settings.palette.purple,
        "symbolIcon.moduleForeground": settings.palette.blue,
        "symbolIcon.colorForeground": settings.palette.blue,
        "symbolIcon.constantForeground": settings.palette.green,
        "symbolIcon.constructorForeground": settings.palette.blue,
        "symbolIcon.enumeratorForeground": settings.palette.blue,
        "symbolIcon.enumeratorMemberForeground": settings.palette.blue,
        "symbolIcon.eventForeground": settings.palette.blue,
        "symbolIcon.fieldForeground": settings.palette.blue,
        "symbolIcon.fileForeground": settings.palette.blue,
        "symbolIcon.folderForeground": settings.palette.blue,
        "symbolIcon.functionForeground": settings.palette.blue,
        "symbolIcon.interfaceForeground": settings.palette.blue,
        "symbolIcon.keyForeground": settings.palette.blue,
        "symbolIcon.keywordForeground": settings.palette.blue,
        "symbolIcon.methodForeground": settings.palette.blue,
        "symbolIcon.nullForeground": settings.palette.red,
        "symbolIcon.numberForeground": settings.palette.red,
        "symbolIcon.objectForeground": settings.palette.blue,
        "symbolIcon.operatorForeground": settings.palette.blue,
        "symbolIcon.packageForeground": settings.palette.blue,
        "symbolIcon.propertyForeground": settings.palette.yellow,
        "symbolIcon.referenceForeground": settings.palette.blue,
        "symbolIcon.snippetForeground": settings.palette.blue,
        "symbolIcon.stringForeground": settings.palette.green,
        "symbolIcon.structForeground": settings.palette.blue,
        "symbolIcon.textForeground": settings.palette.green,
        "symbolIcon.typeParameterForeground": settings.palette.blue,
        "symbolIcon.unitForeground": settings.palette.blue,
        "symbolIcon.variableForeground": settings.palette.blue,
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
          name: "Escape Characters",
          scope: ["constant.character.escape"],
          settings: {
            foreground: settings.syntax.storage,
          },
        },
        {
          name: "URL",
          scope: ["*url*", "*link*", "*uri*"],
          settings: {
            fontStyle: "underline",
            foreground: settings.ui.accent,
          },
        },
        {
          name: "Comment",
          scope: [
            "comment",
            "punctuation.definition.comment",
            "unused.comment",
            "wildcard.comment",
          ],
          settings: {
            fontStyle: "italic",
            foreground: `${settings.ui.foreground}60`,
          },
        },
        {
          name: "Punctuation",
          scope: ["punctuation", "meta.brace"],
          settings: {
            foreground: settings.ui.foreground,
          },
        },
        {
          name: "String",
          scope: ["string"],
          settings: {
            foreground: settings.syntax.string,
          },
        },
        {
          name: "String - Punctuation",
          scope: ["string punctuation"],
          settings: {
            foreground: tinycolor(settings.syntax.string)
              .lighten(10)
              .desaturate(20)
              .toHexString(),
          },
        },
        {
          name: "String - Regex",
          scope: ["string.regexp"],
          settings: {
            foreground: settings.syntax.special,
          },
        },
        {
          name: "String - Template expression",
          scope: ["punctuation.definition.template-expression"],
          settings: {
            foreground: settings.syntax.storage,
          },
        },
        {
          name: "Number, Constant",
          scope: ["constant.numeric", "constant.character", "constant.escape"],
          settings: {
            foreground: settings.syntax.storage,
          },
        },
        {
          name: "Storage",
          scope: [
            "storage",
            "constant.language",
            "support.type.builtin",
            "support.function.builtin",
          ],
          settings: {
            foreground: settings.syntax.storage,
          },
        },
        {
          name: "Keyword",
          scope: [
            "keyword",
            "keyword.operator",
            "meta.decorator",
            "punctuation.decorator",
            "punctuation.definition.keyword",
            "support.type.object.module",
            "variable.language",
          ],
          settings: {
            foreground: settings.syntax.keywords,
          },
        },
        {
          name: "Variables - Class, Entity, Alias, Namespace",
          scope: [
            "variable",
            "variable.other.readwrite.alias",
            "meta.class",
            "meta.attribute entity.name",
            "meta.definition.property",
            "entity.name.package",
            "entity.name.function",
            "entity.name.type",
            "support.function",
          ],
          settings: {
            foreground: settings.syntax.attributes,
          },
        },
        {
          name: "Variable - Objects, Properties",
          scope: [
            "meta.object",
            "variable.object",
            "variable.other.property",
            "variable.other.enummember",
          ],
          settings: {
            foreground: settings.ui.foreground,
          },
        },
        {
          name: "Variables - Arguments",
          scope: ["meta.parameters variable", "variable.parameter"],
          settings: {
            foreground: settings.syntax.arguments,
          },
        },
        {
          name: "Type",
          scope: ["support.type", "meta.type", "meta.enum", "meta.interface"],
          settings: {
            foreground: settings.syntax.attributes,
          },
        },
        {
          name: "Tag - Name",
          scope: ["meta.tag entity.name.tag"],
          settings: {
            foreground: settings.syntax.tags,
          },
        },
        {
          name: "Tag - Markup",
          scope: ["meta.tag punctuation.definition.tag"],
          settings: {
            foreground: tinycolor(settings.syntax.tags).darken(15).toString(),
          },
        },
        {
          name: "Tag - attributes",
          scope: [
            "meta.tag.attributes",
            "meta.attribute",
            "entity.other.attribute-name",
          ],
          settings: {
            foreground: tinycolor(settings.syntax.tags).darken(10).toString(),
          },
        },
        {
          name: "CSS - Tag",
          scope: ["entity.name.tag.css"],
          settings: {
            foreground: settings.syntax.keywords,
          },
        },
        {
          name: "CSS - Classes",
          scope: [
            "entity.other.attribute-name.class.css",
            "entity.other.attribute-name.id.css",
          ],
          settings: {
            foreground: settings.syntax.attributes,
          },
        },
        {
          name: "CSS - Properties",
          scope: ["support.type.property-name.css"],
          settings: {
            foreground: settings.ui.foreground,
          },
        },
        {
          name: "CSS- ID",
          scope: [
            "meta.selector.css",
            "meta.attribute-selector.scss",
            "entity.other.attribute-name.id.css",
          ],
          settings: {
            foreground: settings.syntax.attributes,
          },
        },
        {
          name: "CSS - Value",
          scope: ["meta.property-value.css"],
          settings: {
            foreground: settings.ui.foreground,
          },
        },
        {
          name: "CSS - Punctuation",
          scope: [
            "punctuation.definition.entity.css",
            "entity.other.attribute-name.pseudo-element.css",
          ],
          settings: {
            foreground: settings.syntax.keywords,
          },
        },
        {
          name: "CSS - Unit",
          scope: ["source.css keyword.other.unit"],
          settings: {
            foreground: tinycolor(settings.syntax.storage)
              .darken(10)
              .toString(),
          },
        },
        {
          name: "CSS - Media",
          scope: [
            "support.constant.media.css",
            "support.constant.media-type.media",
          ],
          settings: {
            foreground: settings.syntax.storage,
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
          name: "YML - unquoted",
          scope: ["string.unquoted.plain.out.yaml", "source.yaml punctuation"],
          settings: {
            foreground: settings.ui.foreground,
          },
        },
        {
          name: "JSON - property",
          scope: ["support.type.property-name.json"],
          settings: {
            foreground: settings.syntax.string,
          },
        },
        {
          name: "INI - Group title",
          scope: ["entity.name.section.group-title.ini"],
          settings: {
            foreground: settings.syntax.storage,
          },
        },
        {
          name: "INI - Definition",
          scope: ["keyword.other.definition.ini"],
          settings: {
            foreground: settings.syntax.attributes,
          },
        },
        {
          name: "Shell - Modifier",
          scope: ["storage.modifier.shell"],
          settings: {
            foreground: settings.syntax.keywords,
          },
        },
        {
          name: "Shell - Variable",
          scope: ["variable.other.normal.shell"],
          settings: {
            foreground: settings.syntax.special,
          },
        },
        {
          name: "Shell - Variable Punctuation",
          scope: ["punctuation.definition.variable.shell"],
          settings: {
            foreground: tinycolor(settings.syntax.special)
              .lighten(5)
              .toString(),
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
            foreground: settings.palette.red,
          },
        },
        {
          name: "Changed",
          scope: ["markup.changed"],
          settings: {
            foreground: settings.syntax.special,
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
            foreground: settings.syntax.attributes,
          },
        },
        {
          name: "Markdown - Heading mark",
          scope: [
            "markup.heading | markup.heading entity.name",
            "markup.heading.markdown punctuation.definition.heading.markdown",
          ],
          settings: {
            foreground: settings.syntax.storage,
          },
        },
        {
          name: "Markdown - Markup Raw Inline",
          scope: ["text.html.markdown markup.inline.raw.markdown"],
          settings: {
            foreground: settings.syntax.special,
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
            foreground: settings.syntax.keywords,
          },
        },
        {
          name: "Markup - Bold",
          scope: ["markup.bold", "markup.bold string"],
          settings: {
            fontStyle: "bold",
            foreground: settings.syntax.keywords,
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
            foreground: settings.syntax.attributes,
          },
        },
        {
          name: "Markup - Underline",
          scope: ["markup.underline"],
          settings: {
            fontStyle: "underline",
            foreground: settings.syntax.string,
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
            foreground: settings.syntax.storage,
          },
        },
        {
          name: "Markdown - Image",
          scope: [
            "meta.image.inline.markdown",
            "string.other.link.description.markdown",
          ],
          settings: {
            foreground: settings.syntax.special,
          },
        },
        {
          name: "Markdown - Link",
          scope: ["string.other.link.title.markdown"],
          settings: {
            foreground: settings.syntax.special,
          },
        },
        {
          name: "Markdown - Link Description",
          scope: ["string.other.link.description.title.markdown"],
          settings: {
            foreground: settings.syntax.storage,
          },
        },
        {
          name: "Markdown - Link Anchor",
          scope: ["constant.other.reference.link.markdown"],
          settings: {
            foreground: settings.syntax.string,
          },
        },
        {
          name: "Markup - Raw Block",
          scope: ["markup.raw.block"],
          settings: {
            foreground: settings.syntax.special,
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
      semanticTokenColors: {
        arguments: settings.syntax.arguments,
        // Experimenting with semantic tokens
        // "variable.defaultLibrary": settings.syntax.storage,
        // "method.defaultLibrary": settings.syntax.storage,
      },
      semanticHighlighting: true,
    };
  }
}

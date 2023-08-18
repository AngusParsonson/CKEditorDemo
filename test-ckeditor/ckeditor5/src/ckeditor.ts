/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { DecoupledEditor } from "@ckeditor/ckeditor5-editor-decoupled";

import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import { Autosave } from "@ckeditor/ckeditor5-autosave";
import {
  Bold,
  Italic,
  Strikethrough,
  Underline,
} from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { CloudServices } from "@ckeditor/ckeditor5-cloud-services";
import { Comments } from "@ckeditor/ckeditor5-comments";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { ExportPdf } from "@ckeditor/ckeditor5-export-pdf";
import { ExportWord } from "@ckeditor/ckeditor5-export-word";
import { FindAndReplace } from "@ckeditor/ckeditor5-find-and-replace";
import {
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
} from "@ckeditor/ckeditor5-font";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Highlight } from "@ckeditor/ckeditor5-highlight";
import {
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
} from "@ckeditor/ckeditor5-image";
import { ImportWord } from "@ckeditor/ckeditor5-import-word";
import { Indent, IndentBlock } from "@ckeditor/ckeditor5-indent";
import { Link } from "@ckeditor/ckeditor5-link";
import { DocumentList } from "@ckeditor/ckeditor5-list";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";
import { PageBreak } from "@ckeditor/ckeditor5-page-break";
import { Pagination } from "@ckeditor/ckeditor5-pagination";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { PasteFromOffice } from "@ckeditor/ckeditor5-paste-from-office";
import {
  Table,
  TableCellProperties,
  TableProperties,
  TableToolbar,
} from "@ckeditor/ckeditor5-table";
import { Template } from "@ckeditor/ckeditor5-template";
import { TrackChanges } from "@ckeditor/ckeditor5-track-changes";
import { TextTransformation } from "@ckeditor/ckeditor5-typing";
import { WordCount } from "@ckeditor/ckeditor5-word-count";

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends DecoupledEditor {
  public static override builtinPlugins = [
    Alignment,
    Autoformat,
    Autosave,
    BlockQuote,
    Bold,
    CloudServices,
    Comments,
    DocumentList,
    Essentials,
    ExportPdf,
    ExportWord,
    FindAndReplace,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    Heading,
    Highlight,
    Image,
    ImageCaption,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    ImportWord,
    Indent,
    IndentBlock,
    Italic,
    Link,
    MediaEmbed,
    PageBreak,
    Pagination,
    Paragraph,
    PasteFromOffice,
    Strikethrough,
    Table,
    TableCellProperties,
    TableProperties,
    TableToolbar,
    Template,
    TextTransformation,
    TrackChanges,
    Underline,
    WordCount,
  ];

  public static override defaultConfig = {
    toolbar: {
      items: [
        "heading",
        "|",
        "fontSize",
        "fontFamily",
        "|",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "highlight",
        "findAndReplace",
        "|",
        "alignment",
        "|",
        "numberedList",
        "bulletedList",
        "|",
        "outdent",
        "indent",
        "pageBreak",
        "trackChanges",
        "comment",
        "commentsArchive",
        "|",
        "link",
        "blockQuote",
        "imageUpload",
        "insertTable",
        "mediaEmbed",
        "|",
        "undo",
        "redo",
        "exportWord",
        "importWord",
        "exportPdf",
        "insertTemplate",
        "pageNavigation",
        "nextPage",
        "previousPage",
      ],
    },
    language: "en",
    image: {
      toolbar: [
        "comment",
        "imageTextAlternative",
        "toggleImageCaption",
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
      ],
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableCellProperties",
        "tableProperties",
      ],
      tableToolbar: ["comment"],
    },
    pagination: {
      pageWidth: "21cm",
      pageHeight: "29.7cm",
      pageMargins: {
        top: "20mm",
        bottom: "20mm",
        left: "12mm",
        right: "12mm",
      },
    },
    comments: {
      editorConfig: {
        extraPlugins: [Autoformat, Bold, Italic],
      },
    },
  };
}

export default Editor;

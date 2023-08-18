/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { DecoupledEditor } from '@ckeditor/ckeditor5-editor-decoupled';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Autosave } from '@ckeditor/ckeditor5-autosave';
import { Bold, Italic, Strikethrough, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Comments } from '@ckeditor/ckeditor5-comments';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { ExportPdf } from '@ckeditor/ckeditor5-export-pdf';
import { ExportWord } from '@ckeditor/ckeditor5-export-word';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { Image, ImageCaption, ImageResize, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { ImportWord } from '@ckeditor/ckeditor5-import-word';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { DocumentList } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { Pagination } from '@ckeditor/ckeditor5-pagination';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableCellProperties, TableProperties, TableToolbar } from '@ckeditor/ckeditor5-table';
import { Template } from '@ckeditor/ckeditor5-template';
import { TrackChanges } from '@ckeditor/ckeditor5-track-changes';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { WordCount } from '@ckeditor/ckeditor5-word-count';
declare class Editor extends DecoupledEditor {
    static builtinPlugins: (typeof Alignment | typeof TextTransformation | typeof Autoformat | typeof Autosave | typeof Bold | typeof Italic | typeof Strikethrough | typeof Underline | typeof BlockQuote | typeof CloudServices | typeof Essentials | typeof ExportPdf | typeof ExportWord | typeof FindAndReplace | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof Paragraph | typeof Heading | typeof Highlight | typeof Image | typeof ImageCaption | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof ImportWord | typeof Indent | typeof IndentBlock | typeof Link | typeof DocumentList | typeof MediaEmbed | typeof PageBreak | typeof Pagination | typeof PasteFromOffice | typeof Table | typeof TableCellProperties | typeof TableProperties | typeof TableToolbar | typeof Template | typeof WordCount | typeof Comments | typeof TrackChanges)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        language: string;
        image: {
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
            tableToolbar: string[];
        };
        pagination: {
            pageWidth: string;
            pageHeight: string;
            pageMargins: {
                top: string;
                bottom: string;
                left: string;
                right: string;
            };
        };
        comments: {
            editorConfig: {
                extraPlugins: (typeof Autoformat | typeof Bold | typeof Italic)[];
            };
        };
    };
}
export default Editor;

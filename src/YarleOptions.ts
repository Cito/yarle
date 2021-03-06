import { OutputFormat } from './output-format';

export interface YarleOptions {
    enexSource?: string;
    templateFile?: string;
    outputDir?: string;
    keepOriginalHtml?: boolean;
    isMetadataNeeded?: boolean;
    isNotebookNameNeeded?: boolean;
    isZettelkastenNeeded?: boolean;
    plainTextNotesOnly?: boolean;
    skipLocation?: boolean;
    skipCreationTime?: boolean;
    skipUpdateTime?: boolean;
    skipSourceUrl?: boolean;
    skipWebClips?: boolean;
    skipTags?: boolean;
    useHashTags?: boolean;
    outputFormat?: OutputFormat;
    skipEnexFileNameFromOutputPath?: boolean;
    keepMDCharactersOfENNotes?: boolean;
    monospaceIsCodeBlock?: boolean;
}

interface Labels {
    starred: boolean;
    hidden: boolean;
    trashed: boolean;
    restricted: boolean;
    viewed: boolean;
}

interface Parent {
    kind: string;
    id: string;
    selfLink: string;
    parentLink: string;
    isRoot: boolean;
}

interface UserPermission {
    kind: string;
    etag: string;
    id: string;
    selfLink: string;
    role: string;
    type: string;
}

interface Picture {
    url: string;
}

interface Owner {
    kind: string;
    displayName: string;
    picture: Picture;
    isAuthenticatedUser: boolean;
    permissionId: string;
    emailAddress: string;
}

interface Picture2 {
    url: string;
}

interface LastModifyingUser {
    kind: string;
    displayName: string;
    picture: Picture2;
    isAuthenticatedUser: boolean;
    permissionId: string;
    emailAddress: string;
}

interface Item {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    webContentLink: string;
    alternateLink: string;
    iconLink: string;
    title: string;
    mimeType: string;
    labels: Labels;
    createdDate: Date;
    modifiedDate: Date;
    modifiedByMeDate: Date;
    lastViewedByMeDate: Date;
    markedViewedByMeDate: Date;
    version: string;
    parents: Parent[];
    downloadUrl: string;
    userPermission: UserPermission;
    originalFilename: string;
    fileExtension: string;
    md5Checksum: string;
    fileSize: string;
    quotaBytesUsed: string;
    ownerNames: string[];
    owners: Owner[];
    lastModifyingUserName: string;
    lastModifyingUser: LastModifyingUser;
    editable: boolean;
    copyable: boolean;
    writersCanShare: boolean;
    shared: boolean;
    explicitlyTrashed: boolean;
    appDataContents: boolean;
    headRevisionId: string;
    spaces: string[];
}

export interface FileType {
    kind: string;
    etag: string;
    selfLink: string;
    items: Item[];
}
export interface TokenInfo {
    issued_to: string;
    audience: string;
    scope: string;
    expires_in: number;
    access_type: string;
    error:string;
    error_description:string;
    token:string;
}
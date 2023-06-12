import {DirectoryContent} from "../types";
import {invoke} from "@tauri-apps/api/tauri";

export async function openDirectory(path: string): Promise<DirectoryContent[]> {
   return invoke("open_directory", { path });
}

import { I18nCLIGenerator } from "./cli-generator";
import { FileSystem } from "./file-system";
import { UserActions } from "./user-actions";

const workspaceFolder = "./"

const fs = new FileSystem()

const gen = new I18nCLIGenerator(workspaceFolder, new FileSystem())
gen.generateUpdateAsync()

CREATE TABLE `gyms` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`user_id` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`first_name` text,
	`last_name` text
);

CREATE TABLE `events` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`location` text,
	`date` text,
	`organiser` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `nameIdx` ON `users` (`last_name`);
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import tw from "twin.macro";
import styled from "@emotion/styled";

const dialogStyles = {
  dialogDescription: tw`text-sm text-muted-foreground p-6`,
  dialogFooter: tw`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2`,
  dialogHeader: tw`flex flex-col space-y-1.5 text-center sm:text-left`,
  dialogOverlay: tw`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`,
  dialogPortal: tw`fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background overflow-hidden shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg`,
  dialogTitle: tw`text-lg font-semibold leading-none tracking-tight bg-[#CC0000] p-6 border-b-8 border-black`,
};

const dialogPrimitiveStyles = {
  dialogContent: tw`fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background overflow-hidden shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg`,
  dialogClose: tw`absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground`,
};

const Dialog = DialogPrimitive.Root;

const DialogClose = DialogPrimitive.Close;

const DialogDescription = styled(DialogPrimitive.Description)(() => [
  dialogStyles.dialogDescription,
]);

const DialogFooter = styled.div(() => [dialogStyles.dialogFooter]);

const DialogHeader = styled.div(() => [dialogStyles.dialogHeader]);

const DialogOverlay = styled(DialogPrimitive.Overlay)(() => [
  dialogStyles.dialogOverlay,
]);

const DialogPortal = DialogPrimitive.Portal;

const DialogTitle = styled(DialogPrimitive.Title)(() => [
  dialogStyles.dialogTitle,
]);

const DialogTrigger = DialogPrimitive.Trigger;

const PrimitiveContent = styled(DialogPrimitive.Content)(() => [
  dialogPrimitiveStyles.dialogContent,
]);

const PrimitiveClose = styled(DialogPrimitive.Close)(() => [
  dialogPrimitiveStyles.dialogClose,
]);

const CloseIcon = styled(Cross2Icon)(() => [tw`h-4 w-4 text-slate-50`]);

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <PrimitiveContent ref={ref} {...props}>
      {children}
      <PrimitiveClose>
        <CloseIcon />
        <span className="sr-only">Close</span>
      </PrimitiveClose>
    </PrimitiveContent>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};

import streamlit as st
import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.prompts import PromptTemplate
import pyperclip
import sqlite3
from datetime import datetime
import hashlib
import time

load_dotenv()
GROQ_API_KEY = os.getenv('GROQ_API_KEY')

def create_prompt():
    prompt_template = """
You are a Software Engineer who know everything. Your name is codebhaiya.
Please respond to the following prompt:
{input}
"""
    return PromptTemplate.from_template(prompt_template)

def main():
    st.title("Hi, I'm Codebhaiya")
    prompt = st.chat_input(placeholder="Ask anything ...")
    if prompt:
        llm = ChatGroq(
                temperature=0, 
                groq_api_key=GROQ_API_KEY, 
                model_name="llama-3.1-8b-instant"
            )
        prompt_extract = create_prompt()
        chain_extract = prompt_extract | llm 
        res = chain_extract.invoke(prompt)
     
        words = res.content.split()
        placeholder = st.empty()
        displayed_text = ""
        for word in words:
            displayed_text += word + " "
            placeholder.write(displayed_text)
            time.sleep(0.05)  # Adjust the delay as needed

if __name__ == "__main__":
    main()